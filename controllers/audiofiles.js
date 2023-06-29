const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllFiles = (req, res) => {
  let sql = "SELECT * FROM audio_files"
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const uploadFile = (req, res) => {

}

module.exports = {
  getAllFiles,
  uploadFile
}