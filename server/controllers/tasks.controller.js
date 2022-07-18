import { sqlDB } from '../db.js'

export const getTasks = async (req, res) => {
  const [result] = await sqlDB.query(
    'SELECT * FROM tasks ORDER BY createdAt ASC'
    )

    if (result.length <= 0) return res.sendStatus(400)
  
    return res.status(200).json(result)
}

export const getTask = async (req, res) => {

  const [result] = await sqlDB.query('SELECT * FROM tasks WHERE id = ?',
  [req.params.id])

  if (result.length <= 0) return res.sendStatus(400)

  return res.json({
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

export const updateTask = async (req, res) => {
  const [result] = await sqlDB.query('UPDATE tasks SET ? WHERE id = ?',
  [req.body, req.params.id]
  )
  if (result.affectedRows == 0) return res.sendStatus(400)
  
  return res.json(result)
}

export const deleteTask = async (req, res) => {
  const [result] = await sqlDB.query('DELETE FROM tasks WHERE id = ?', [req.params.id])
  return res.sendStatus(204)
}

