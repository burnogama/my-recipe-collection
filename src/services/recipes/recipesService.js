const serviceHelper = require("../../utils/serviceHelper.js");
const { extractValues } = require("../../utils/extractValues.js");

const QUERY = require("./recipesQuery.js");

const bodyValues = ["name", "description", "yield_amount", "cost_price", "instructions", "notes"];

//Rotas específicas
function searchRecipeByName(nameArray) {
    return serviceHelper.getAllService(QUERY.searchbyName, nameArray);
}

//CRUD Básico

//POST
function createRecipe(body) {
    return serviceHelper.insertService(QUERY.insert, extractValues(bodyValues, body));
}

//GET
function getAllRecipes() {
    return serviceHelper.getAllService(QUERY.getAll);
}

//GET :id
function getRecipeById(id) {
    return serviceHelper.getOneService(QUERY.getOne, id);
}

//PATCH :id
function updateOneRecipe(body, id) {
    return serviceHelper.updateService(QUERY.update, extractValues(bodyValues, body), id);
}

//DELETE :id
function deleteOneRecipe(id) {
    return serviceHelper.deleteService(QUERY.delete, id);
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateOneRecipe,
    deleteOneRecipe,
    searchRecipeByName,
};
