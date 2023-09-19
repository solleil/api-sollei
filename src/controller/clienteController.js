import { Router } from "express";
import { Consultar, Inserir } from "../repository/clienteRepository.js";


const endPoint = Router();

endPoint.get(('/cliente'), async (req, resp) => {

        let resposta = await Consultar();
        resp.send(resposta);

})


endPoint.post(('/cliente'), async (req, resp) => {

        let x = req.body;
        let dados = await Inserir(x)
        resp.send(dados)

})

export default endPoint;