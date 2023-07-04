const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllFiles = (req, res) => {
  let sql = "SELECT file_name FROM audio_files"
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const uploadFile = (req, res) => {
  const { file_name, user_id } = req.body;
  const sql = "INSERT INTO audio_files (file_name, user_id) VALUES (?, ?)";
  const values = [file_name, user_id];
  pool.query(sql, values, (err, results) => {
    if (err) {
      return handleSQLError(res, err);
    }
    return res.json(results);
  });
};

module.exports = {
  getAllFiles,
  uploadFile
}