class AppError extends Error {
  constructor(errMessage, statusCode) {
    super(errMessage);
    this.statusCode = statusCode || 500;
    // wrong --> statusCode string hote hobe. startsWith string expect kore
    // this.status = statusCode.startsWith("4") ? "fail" : "error";
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = AppError;

// all 400 errors are client error
// all 500 errors are server error
