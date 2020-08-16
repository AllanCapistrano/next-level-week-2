// ####### Alguns métodos HTTP ############
// GET: Buscar ou listar uma informação;
// POST: Criar algumava nova informação;
// PUT: Atualizar uma informação existente;
// DELETE: Deletar uma informação existente.

// Corpo (Request Body): Dados para a criação ou atualização de um registro;
// Route Params: Identificar qual recurso eu quero atualizar ou deletar;
// Query Params: Pginação, filtros, ordenação, entre outros.

import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import RegisterController from './controllers/RegisterController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();
const registerControllers = new RegisterController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

// routes.get('/register', registerControllers.index)
routes.post('/register', registerControllers.create)

export default routes;