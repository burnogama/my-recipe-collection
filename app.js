require("dotenv").config();
const express = require("express");
const { initDB } = require("./db/config/initDB");
//const runAllMigrations = require("./db/scripts/runMigrations");

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Rota funcionando!" });
});

app.listen(port, () => {
    console.log("Escutando na porta:", port);
});
