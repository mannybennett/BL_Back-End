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

const getUserById = (req, res) => {
  let sql = "SELECT * FROM users WHERE id = ?"
  sql = mysql.format(sql, [req.params.id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createUser = (req, res) => {
  const { user_name, profile_picture } = req.body;
  let sql = "INSERT INTO users (user_name, profile_picture) VALUES (?, ?)"
  const values = [user_name, profile_picture];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser
}