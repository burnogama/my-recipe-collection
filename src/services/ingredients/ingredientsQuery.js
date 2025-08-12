const queries = {
    insert: "INSERT INTO ingredients (name, unit_price, unit) VALUES ($1, $2, $3) RETURNING *",
    getAll: "SELECT * FROM ingredients",
    getOne: "SELECT * FROM ingredients WHERE id = $1",
    update: "UPDATE ingredients SET name = $1, unit = $2, unit_price = $3 WHERE id = $4 RETURNING *",
    delete: "DELETE FROM ingredients WHERE id = $1 RETURNING *",
    searchByName: "SELECT * FROM ingredients WHERE name ILIKE $1",
};

module.exports = queries;
