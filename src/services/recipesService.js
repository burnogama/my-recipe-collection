const serviceHelper = require("../utils/serviceHelper.js");
const { extractValues } = require("../utils/extractValues.js");

const QUERY = {
    insert: "INSERT INTO recipes (name, description, yield_amount, cost_price, instructions, notes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    getAll: "SELECT * FROM recipes",
    getOne: "SELECT * FROM recipes WHERE id = $1",
    update: "UPDATE recipes SET name = $1, description = $2, yield_amount = $3, cost_price = $4, instructions = $5, notes = $6 WHERE id = $7 RETURNING *",
    delete: "DELETE FROM recipes WHERE id = $1 RETURNING *",
};

const bodyValues = ["name", "description", "yield_amount", "cost_price", "instructions", "notes"];

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
};
