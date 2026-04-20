import createError from "http-errors";
import express, { NextFunction, Request, Response } from "express";
import * as path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import indexRouter from "./routes/index";

import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080; // default port to listen

if (process.env.NODE_ENV !== "production") {
   app.use(cors());
   app.options("*", cors());
}

import engine from "consolidate";
import startDb from "./utils/db/connect";
import MyError from "./types/Error";

app.set("view engine", "html");
app.engine("html", engine.mustache);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "public")));

// routes
app.use("/", indexRouter);

// move to server.ts
startDb();

// catch 404 and forward to error handler
app.use((req, res, next) => {
   next(createError(404));
});

const getErrorStatus = (error: unknown) => {
   if (error instanceof MyError) {
      return error.status;
   }

   if (error && typeof error === "object") {
      const maybeError = error as {
         status?: unknown;
         statusCode?: unknown;
         code?: unknown;
         name?: string;
         message?: string;
      };

      if (typeof maybeError.status === "number") {
         return maybeError.status;
      }

      if (typeof maybeError.statusCode === "number") {
         return maybeError.statusCode;
      }

      if (maybeError.name === "ValidationError") {
         return 400;
      }

      if (maybeError.name === "CastError") {
         return 400;
      }

      if (maybeError.code === 11000) {
         return 409;
      }
   }

   return 500;
};

const getErrorMessage = (
   error: unknown,
   status: number,
   isDevelopment: boolean,
) => {
   if (error instanceof MyError) {
      return error.message;
   }

   if (error instanceof Error && status < 500) {
      return error.message;
   }

   if (isDevelopment && error instanceof Error) {
      return error.message;
   }

   return status >= 500 ? "Internal Server Error" : "Request failed";
};

// error handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
   if (res.headersSent) {
      next(err);
      return;
   }

   const status = getErrorStatus(err);
   const isDevelopment = req.app.get("env") === "development";
   const message = getErrorMessage(err, status, isDevelopment);

   const body: {
      error: {
         message: string;
         status: number;
         details?: unknown;
         stack?: string;
      };
   } = {
      error: {
         message,
         status,
      },
   };

   if (err instanceof MyError && err.details !== undefined) {
      body.error.details = err.details;
   }

   if (isDevelopment && err instanceof Error) {
      body.error.stack = err.stack;
   }

   res.status(status).json(body);
});

// start the Express server
app.listen(port, () => {
   console.log(`server started at http://localhost:${port}`);
});
