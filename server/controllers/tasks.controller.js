import { sqlDB } from '../db.js'


export const createTask = async (req, res) => {
  const { title, description } = req.body
  const [ insertId ] = await sqlDB.query(
    'INSERT INTO tasks(title, description) VALUES (?, ?)',
    [title, description]
  )

  res.status(200).send({
    id: insertId['insertId'],
    title,
    description
  })
}

export const updateTask = (req, res) => {
  res.send('actualizando tarea')
}

export const deleteTask = (req, res) => {
  res.send('eliminar tarea')
}

