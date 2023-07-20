// require("dotenv").config();
// const { PORT } = process.env;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index.js");

const server = express();

server.use(morgan("dev"));

server.use(express.json());

server.use(cors());

server.use("/rickandmorty", router);

module.exports = server;
