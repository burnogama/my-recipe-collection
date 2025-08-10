/* ERROR CODES

23505: chave duplicada (violação de unique constraint)
42601: erro de sintaxe SQL
42P01: tabela não existe
42703: coluna não existe
*/

// Express error handling middleware function
function errorHandler(err, req, res, next) {
    console.error(err.stack || err); // Log the full error stack or error message

    // Handle duplicate key error (e.g., trying to insert a duplicate email)
    if (err.code === "23505") {
        return res.status(409).json({
            error: "Conflict: data already exists",
            details: err.detail || err.message,
        });
    }

    // Map of common SQL error codes to friendly messages
    const sqlErrors = {
        "42601": "SQL syntax error",
        "42P01": "Table doesn't exist",
        "42703": "Row doesn't exist",
    };

    // If error code matches known SQL errors, return 400 Bad Request with message
    if (sqlErrors[err.code]) {
        return res.status(400).json({
            error: sqlErrors[err.code],
            details: err.message,
        });
    }

    // Handle custom thrown errors with statusCode (from throwError utility)
    if (err.statusCode) {
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }

    // Default: for any other unhandled errors, return 500 Internal Server Error
    res.status(500).json({
        error: "Internal server error",
        details: err.message,
    });
}

module.exports = errorHandler;
