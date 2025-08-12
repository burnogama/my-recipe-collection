const controller = require("../utils/controllerHelper.js");
const service = require("../services/recipes/recipesService.js");
const { validateFound, validateRequiredFields } = require("../utils/validationHelper.js");

const requiredFields = ["name", "yield_amount", "cost_price"];

//SEARCH by name
async function searchRecipeByNameController(req, res) {
    validateRequiredFields(req.query, ["name"]);
    const name = `%${req.query.name}%`;
    const response = await controller.getAllController(service.searchRecipe, [name]);
    controller.sendResponse(res, 200, response);
}

//POST
async function createRecipeController(req, res) {
    const response = await controller.insertController(req.body, service.createRecipe, requiredFields);
    controller.sendResponse(res, 201, response);
}

//GET
async function getAllRecipesController(req, res) {
    const response = await controller.getAllController(service.getAllRecipes);
    controller.sendResponse(res, 200, response);
}

//GET :id
async function getOneRecipeController(req, res) {
    const response = await controller.getOneController(req.params.id, service.getRecipeById);
    validateFound(response, "Recipe");
    controller.sendResponse(res, 200, response);
}

//PATCH :id
async function updateOneRecipeController(req, res) {
    const response = await controller.updateController(
        req.body,
        req.params.id,
        service.updateOneRecipe,
        requiredFields
    );
    validateFound(response, "Recipe");
    controller.sendResponse(res, 200, response);
}

//DELETE :id
async function deleteOneRecipeController(req, res) {
    const response = await controller.deleteController(req.params.id, service.deleteOneRecipe);
    validateFound(response, "Recipe");
    controller.sendResponse(res, 204, response);
}

module.exports = {
    createRecipeController,
    getAllRecipesController,
    getOneRecipeController,
    updateOneRecipeController,
    deleteOneRecipeController,
    searchRecipeByNameController,
};
