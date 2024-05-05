// Define an enum-like object for HTTP status codes
const HttpStatusCode = {
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500,
};

// Define a mapping of status codes to error messages
const errorMessageMap = {
  [HttpStatusCode.BadRequest]: "Bad Request",
  [HttpStatusCode.Unauthorized]: "Unauthorized",
  [HttpStatusCode.Forbidden]: "Forbidden",
  [HttpStatusCode.NotFound]: "Not Found",
  [HttpStatusCode.InternalServerError]: "Internal Server Error",
};

// Error handler function
export const errorHandler = (err, req, res, next) => {
  // Default status code is 500 (Internal Server Error)
  let statusCode = HttpStatusCode.InternalServerError;

  // Check if the error has a known HTTP status code
  if (
    err.statusCode &&
    Object.values(HttpStatusCode).includes(err.statusCode)
  ) {
    statusCode = err.statusCode;
  }

  // If Mongoose not found error, set to 404 and change message
  if (err?.name === "CastError" && err?.kind === "ObjectId") {
    statusCode = 500;
    err.message = "Resource not found - Invalid Object Id";
  }

  // If Mongoose validation error, set to 400 and change message
  if (err?.name === "ValidationError") {
    statusCode = 400;
    err.message = "Validation Error";
  }

  // If Mongoose duplicate key error, set to 400 and change message
  if (err?.code === 11000) {
    statusCode = 400;
    err.message = "Duplicate key error";
  }

  // Check json web token error
  if (err?.name === "JsonWebTokenError") {
    statusCode = 400;
    err.message = "Invalid token";
  }

  // Log the error
  console.error(err);

  // Send the appropriate HTTP response
  res.status(statusCode).json({
    message: err.message || errorMessageMap[statusCode],
    data: null,
    success: false,
  });
};

// Custom HTTP error function
export const throwHttpError = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode || HttpStatusCode.InternalServerError;
  return error;
};
