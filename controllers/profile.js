const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const deleteFile = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM audio_files WHERE id = ?";
  const values = [id];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} file` });
  });
};

const deleteVote = (req, res) => {
  const { audio_file_id } = req.params;
  const sql = "DELETE FROM votes WHERE audio_file_id = ?";
  const values = [audio_file_id];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted: ${results.affectedRows}` });
  });
};

const deleteComment = (req, res) => {
  const { audio_file_id } = req.params;
  const sql = "DELETE FROM comments WHERE audio_file_id = ?";
  const values = [audio_file_id];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted: ${results.affectedRows}` });
  });
};

module.exports = {
  deleteFile,
  deleteVote, 
  deleteComment
}