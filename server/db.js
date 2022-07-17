import { createPool } from 'mysql2/promise';

export const pool = createPool({
  host: '127.0.0.1',
  user: 'root',
  port: 3306,
  password: '@FeRnAnDo1',
  database: 'tasksdb'
});

