const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
* Tipos de parametros
Query: parametros nomeados enviados na rota após ? (filtros paginação)
Route Params: parametros para identificar recursos /users/:id ex users/1
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos;
*/

/**
 * SQL SQLite
 * 
 * 
 * Driver: SELECT * FROM user
 * Query Builder: table('user').
 */



app.listen(3333);