// Create and throw a custom error with a message and HTTP status code
// Create a new error instance with a message
// Attach an HTTP status code to the error
// Throw the error to be handled by middleware

function throwError(message, code) {
    const error = new Error(message);
    error.statusCode = code;
    throw error;
}

module.exports = throwError;
