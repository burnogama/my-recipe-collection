const { pool } = require("../../db/config/initDB.js");

//CREATE
async function insertService(querySql, data) {
    const res = await pool.query(querySql, data);
    return res.rows[0];
}

//READ all
async function getAllService(querySql) {
    const res = await pool.query(querySql);
    return res.rows;
}

//READ one
async function getOneService(querySql, id) {
    const res = await pool.query(querySql, [id]);
    return res.rows[0];
}

//UPDATE one
async function updateService(querySql, data, id) {
    data.push(id);
    const res = await pool.query(querySql, data);
    return res.rows[0];
}

//DELETE one
async function deleteService(querySql, id) {
    const res = await pool.query(querySql, [id]);
    return res.rows[0];
}

module.exports = {
    insertService,
    getAllService,
    getOneService,
    updateService,
    deleteService,
};
