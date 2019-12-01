class ApiError extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.status = status || this.constructor.status || 500;
  }
}
export default ApiError;
