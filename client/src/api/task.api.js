import axios from 'axios'

export const creteTaskRequest = async (task) => {
  return await axios.post('http://localhost:400/api/v1/tasks', task)
}