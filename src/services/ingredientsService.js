const serviceHelper = require("../utils/serviceHelper.js");
const { extractValues } = require("../utils/extractValues.js");

const QUERY = {
    insert: "INSERT INTO ingredients (name, unit_price, unit) VALUES ($1, $2, $3) RETURNING *",
    getAll: "SELECT * FROM ingredients",
    getOne: "SELECT * FROM ingredients WHERE id = $1",
    update: "UPDATE ingredients SET name = $1, unit = $2, unit_price = $3 WHERE id = $4 RETURNING *",
    delete: "DELETE FROM ingredients WHERE id = $1 RETURNING *",
    searchByName: "SELECT * FROM ingredients WHERE name ILIKE $1",
};

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
