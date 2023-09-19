import mysql from 'mysql2/promise';

const conexao = mysql.createConnection({

    localhost:  process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PWD

})

console.log('banco de dados conectado')
export {conexao};