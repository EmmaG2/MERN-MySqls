import express from 'express';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';

const app = express()

app.listen(PORT)

app.use(indexRoutes)

console.log(`server running on ${PORT}`)