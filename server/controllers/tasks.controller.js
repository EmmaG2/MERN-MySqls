import { sqlDB } from '../db.js'

export const getTasks = async (req, res) => {
  const [result] = await sqlDB.query(
    'SELECT * FROM tasks ORDER BY createdAt ASC'
    )
  
    res.json(result)
}

export const getTask = async (req, res) => {

  const [result] = await sqlDB.query('SELECT * FROM tasks WHERE id = ?',
  [req.params.id])

  if (result.length <= 0) return res.status(400).json({
    succes: false,
  })

  return res.json({
    succes: true,
    response: result[0]
  })
  
}

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

