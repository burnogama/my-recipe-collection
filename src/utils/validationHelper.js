const throwError = require("./errorHelper.js");

// Check if all required fields exist and are not empty in the request body
function validateRequiredFields(source, requiredFields) {
    const missingFields = [];

    for (const field of requiredFields) {
        if (!source[field] || source[field].toString().trim() === "") missingFields.push(field); //Add missing fields to the missingFields array
    }

    // if there are any missing fields throw an error 400 Bad Request
    if (missingFields.length > 0) throwError(`Missing fields: ${missingFields.join(", ")}`, 400);
}

// Check if a resource (e.g., database record) was found.
function validateFound(resource, resourceName = "Resource") {
    // Throw 404 if no data found (null, undefined, or empty array)
    if (!resource || (Array.isArray(resource) && resource.length === 0)) {
        throwError(`${resourceName} not found`, 404);
    }
}

module.exports = {
    validateRequiredFields,
    validateFound,
};
