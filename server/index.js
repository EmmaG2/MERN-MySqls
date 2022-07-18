import express from 'express';
import { PORT } from './config.js';
import router from './routes/tasks.routes.js'

const app = express()

app.listen(PORT)

app.use(express.json())

app.use('/api/v1', router)

console.log(`server running on ${PORT}`)