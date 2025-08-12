const serviceHelper = require("../../utils/serviceHelper.js");
const { extractValues } = require("../../utils/extractValues.js");

const QUERY = require("./ingredientsQuery.js");

//Extract row values from the table
const bodyValues = ["name", "unit_price", "unit"];

//SEARCH by name
function searchIngredientByName(nameArray) {
    return serviceHelper.getAllService(QUERY.searchByName, nameArray);
}

//POST
function createIngredient(body) {
    return serviceHelper.insertService(QUERY.insert, extractValues(bodyValues, body));
}

//GET
function getAllIngredients() {
    return serviceHelper.getAllService(QUERY.getAll);
}

//GET :id
function getOneIngredient(id) {
    return serviceHelper.getOneService(QUERY.getOne, id);
}

//PATCH :id
function updateOneIngredient(body, id) {
    return serviceHelper.updateService(QUERY.update, extractValues(bodyValues, body), id);
}

//DELETE :id
function deleteOneIngredient(id) {
    return serviceHelper.deleteService(QUERY.delete, id);
}

module.exports = {
    createIngredient,
    getAllIngredients,
    getOneIngredient,
    updateOneIngredient,
    deleteOneIngredient,
    searchIngredientByName,
};
