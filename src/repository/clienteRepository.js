import {conexao} from "./connection.js";

export async function Listartodos(){
    let comando = 
        `select * 
     from tb_cliente;`
    

    let [dados] = await conexao.query(comando);
    return dados;
}

export async function inserir(cliente){
    let comando = 
        `insert into tb_cliente(nm_cliente, ds_sobrenome, ds_telefone, ds_email, ds_cpf, dt_nasc, ds_senha )
        values(?, ?, ?, ?, ?, ?, ?)`;
    
    let [info] = await conexao.query(comando, [
        cliente.nome,
        cliente.sobrenome,
        cliente.telefone,
        cliente.email,
        cliente.cpf,
        cliente.nasc,
        cliente.senha
    ])

    cliente.id = info.insertID;
    return cliente
} 

