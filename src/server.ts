import createError from 'http-errors';
import express from "express";
import * as path from 'path';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import recipesRouter from './routes/recipes';
import tagsRouter from './routes/tags';


const app = express();
const port = 8080; // default port to listen

import engine from 'consolidate';

app.set('view engine', 'html');
app.engine('html', engine.mustache);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

// routes
app.use('/users', usersRouter);
app.use('/content/recipes', recipesRouter);
app.use('/content/tags', tagsRouter)
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    // console.log(req, res, next);
    next(createError(404));
  });

// error handler
app.use((err: any, req: any, res: any, next: any) => {
  // console.log(req, res, next);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );