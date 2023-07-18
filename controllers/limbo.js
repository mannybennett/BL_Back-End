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

const getAllComments = (req, res) => {
  let sql = "SELECT * FROM comments"
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

const postComment = (req, res) => {
  const { comment, user_id, user_name, audio_file_id, profile_picture } = req.body;
  const sql = "INSERT INTO comments (comment, user_id, user_name, audio_file_id, profile_picture) VALUES (?, ?, ?, ?, ?)";
  const values = [comment, user_id, user_name, audio_file_id, profile_picture];
  pool.query(sql, values, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  });
};

module.exports = {
  getAllVotes,
  getAllComments,
  postVote,
  postComment
}