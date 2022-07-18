import { Router } from 'express'
import { getTask, getTasks, createTask, deleteTask, updateTask, } from '../controllers/tasks.controller.js'

const router = Router()

router.get('/tasks', getTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.put('/tasks/:id', updateTask)

router.delete('/tasks/:id', deleteTask)

export default router