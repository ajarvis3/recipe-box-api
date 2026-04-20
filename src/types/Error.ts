class MyError extends Error {
   status: number;
   details?: unknown;

   constructor(status: number, message: string, details?: unknown) {
      super(message);
      this.name = "MyError";
      this.status = status;
      this.details = details;
      Object.setPrototypeOf(this, new.target.prototype);
   }
}

export default MyError;
