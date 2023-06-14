import express from 'express'
import { addToDo,gettAllToDos } from '../controllers/todoController.js';

const route = express.Router();

route.post('/todos',addToDo)
route.get('/todos',gettAllToDos)

export default route;