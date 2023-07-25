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
  const { file_name, user_id, title, user_name, image } = req.body;
  const sql = "INSERT INTO audio_files (file_name, user_id, title, user_name, image) VALUES (?, ?, ?, ?, ?)";
  const values = [file_name, user_id, title, user_name, image];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  });
};

const deleteFile = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM audio_files WHERE id = ?";
  const values = [id];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} file` });
  });
};

const playCount = (req, res) => {
  const { id } = req.params;
  const sql = "UPDATE audio_files SET plays = COALESCE(plays, 0) + 1 WHERE id = ?";
  const values = [id];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json(results);
  });
};


module.exports = {
  getAllFiles,
  uploadFile,
  deleteFile,
  playCount
}