import express from "express";
import cors from "cors";
import "dotenv/config";
import clientecontroller from "./controller/clienteController.js"


const server = express ();
server.use (cors());
server.use (express.json());
server.use (clientecontroller);


server.listen(process.env.PORT,() => console.log (`API online na porta ${process.env.PORT}`));