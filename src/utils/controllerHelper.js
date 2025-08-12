const service = require("../services/recipesService.js");
const { validateRequiredFields } = require("../utils/validationHelper.js");

function sendResponse(res, status, data) {
    res.status(status).json({ data });
}

//POST
async function insertController(body, serviceFunction, requiredFields) {
    validateRequiredFields(body, requiredFields);
    const response = await serviceFunction(body);
    return response;
}

//GET
async function getAllController(serviceFunction, params = []) {
    const response = await serviceFunction(params);
    return response;
}

//GET :id
async function getOneController(id, serviceFunction) {
    const response = await serviceFunction(id);
    return response;
}

//PATCH :id
async function updateController(body, id, serviceFunction, requiredFields) {
    validateRequiredFields(body, requiredFields);
    const response = await serviceFunction(body, id);
    return response;
}

//DELETE :id
async function deleteController(id, serviceFunction) {
    const response = await serviceFunction(id);
    return response;
}

module.exports = {
    sendResponse,
    insertController,
    getAllController,
    getOneController,
    updateController,
    deleteController,
};
