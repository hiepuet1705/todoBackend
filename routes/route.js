import express from 'express'
import { addToDo,gettAllToDos,toggleToDoDone,updateTodo,deleteTodo } from '../controllers/todoController.js';

const route = express.Router();

route.post('/todos',addToDo)
route.get('/todos',gettAllToDos)
route.get('/todos/:id',toggleToDoDone)
route.put('/todos/:id',updateTodo)
route.delete('/todos/:id',deleteTodo)
export default route;