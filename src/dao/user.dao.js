const { query } = require('./../repositories/main.repository');

class userDao {

  static exists(value, field) {
    const sql = `SELECT COUNT(*) AS 'exists' FROM User WHERE ${field} = ?`;

    return query(sql, value);
  }

  static getUser(value, field) {
    const sql = `SELECT email, firstName, userName, firstName, lastName, passwordEncrypted, role, createdAt FROM User WHERE ${field} = ?`;

    return query(sql, value);
  }

}

module.exports = userDao;
