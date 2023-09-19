import {con} from "./connection.js";

export async function listartodos(){
    let comando = 
        `select * 
     from tb_cliente;`
    

    let [dados] = await con.query (comando);
    return dados;
}


export async function inserir(cliente){
    let comando = 
        `insert into tb_cliente(nm_cliente, ds_sobrenome, ds_telefone, ds_email, ds_cpf, dt_nasc, ds_senha )
        values(?, ?, ?, ?, ?, ?, ?)`;
    
    let [info] = await con.query (comando, [
        cliente.nome,
        cliente.sobrenome,
        cliente.telefone,
        cliente.email,
        cliente.cpf,
        cliente.nasc,
        cliente.senha
    ])

    cliente.id = info.insertID;
    return cliente;
} 



