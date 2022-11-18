import express from 'express'
//import { getAllTodos } from '../../client/src/redux/actions/indux.js'

import { addTodo, getAllTodos } from '../controller/todo-controller.js'

const router = express.Router()

router.post('/todos', addTodo)
router.get('/todos', getAllTodos);


export default router;