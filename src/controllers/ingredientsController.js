const controller = require("../utils/controllerHelper.js");
const service = require("../services/ingredientsService.js");
const { validateFound, validateRequiredFields } = require("../utils/validationHelper.js");

const requiredFields = ["name"];

//SEARCH by name
async function getIngredientByNameController(req, res) {
    validateRequiredFields(req.query, ["name"]);
    const name = `%${req.query.name}%`;
    const response = await controller.getAllController(service.searchIngredientByName, [name]);
    controller.sendResponse(res, 200, response);
}

//POST
async function createIngredientController(req, res) {
    const response = await controller.insertController(req.body, service.createIngredient, requiredFields);
    controller.sendResponse(res, 201, response);
}

//GET
async function getAllIngredientsController(req, res) {
    const response = await controller.getAllController(service.getAllIngredients);
    controller.sendResponse(res, 200, response);
}

//GET :id
async function getOneIngredientController(req, res) {
    const response = await controller.getOneController(req.params.id, service.getOneIngredient);
    validateFound(response, "Ingredient");
    controller.sendResponse(res, 200, response);
}

//PATCH :id
async function updateOneIngredientController(req, res) {
    const response = await controller.updateController(
        req.body,
        req.params.id,
        service.updateOneIngredient,
        requiredFields
    );
    validateFound(response, "Ingredient");
    controller.sendResponse(res, 200, response);
}

//DELETE :id
async function deleteOneIngredientController(req, res) {
    const response = await controller.deleteController(req.params.id, service.deleteOneIngredient);
    validateFound(response, "Ingredient");
}

module.exports = {
    createIngredientController,
    getAllIngredientsController,
    getOneIngredientController,
    updateOneIngredientController,
    deleteOneIngredientController,
    getIngredientByNameController,
};
