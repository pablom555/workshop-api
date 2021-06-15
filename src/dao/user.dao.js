const { query } = require("../repositories/main.repository");

class userDao {
  static signUp(user) {
    const insertUserQuery = `INSERT INTO User (userName, firstName, lastName, email, password, role) 
        values (?, ?, ?, ?, ?, ?)`;

    return query(insertUserQuery, user);
  }

  static exists(value, field) {
    const sql = `SELECT COUNT(*) AS 'exists' FROM User WHERE ${field} = ?`;

    return query(sql, value);
  }
}

module.exports = userDao;
