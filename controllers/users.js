const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUsers = (req, res) => {
  let sql = "SELECT * FROM users"
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserByEmail = (req, res) => {
  const { email } = req.params
  let sql = "SELECT * FROM users WHERE email = ?"
  const values = [email]
  pool.query(sql, values, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const updateUser = (req, res) => {
  let sql = "UPDATE users SET user_name = ?, profile_picture = ? WHERE id = ?"
  let values = []
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json(results);
  })
}

const createUser = (req, res) => {
  const { user_name, email, profile_picture } = req.body;
  let sql = "INSERT INTO users (user_name, email, profile_picture) VALUES (?, ?, ?)"
  const values = [user_name, email, profile_picture];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  updateUser,
  createUser
}