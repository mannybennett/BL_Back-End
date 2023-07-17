const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllVotes = (req, res) => {
  let sql = "SELECT * FROM votes"
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const postVote = (req, res) => {
  const { vote, user_id, audio_file_id } = req.body;
  const sql = "INSERT INTO votes (vote, user_id, audio_file_id) VALUES (?, ?, ?)";
  const values = [vote, user_id, audio_file_id];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  });
};

module.exports = {
  postVote,
  getAllVotes
}