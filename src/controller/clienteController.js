import { Router } from "express";
import { listartodos, inserir } from "../repository/clienteRepository.js";
const server = Router();


server.get(('/cliente'), async (req, resp) => {
        try {
          const resposta = await listartodos();
          resp.send(resposta);
      
        } catch (err) {
          resp.status(404).send({ erro: err.message })
        }
      })
      
      
server.post(('/cliente'), async (req, resp) => {
        try {
          let x = req.body;
          let dados = await inserir(x)
          resp.send(dados)
        } catch (error) {
          resp.status(404).send({ erro: err.message })
        }
      
})

export default server;