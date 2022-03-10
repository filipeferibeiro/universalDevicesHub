import express from 'express';
import TypesController from './controllers/typesController';
import MessagesController from './controllers/messagesController';

const routes = express.Router();

const typesController = new TypesController();
const messagesController = new MessagesController();

routes.get('/types', typesController.index);
routes.get('/messages', messagesController.index);

export default routes;