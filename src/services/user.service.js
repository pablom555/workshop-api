const userDao = require("../dao/user.dao");

class userService {
  static async signUp(userName, firstName, lastName, email, password, role) {
    const result = await userDao.exists(email, "email");
    const exists = result[0].exists;

    if (exists > 0)
      throw { status: 409, error: "email_in_use", msg: "Email en uso" };

    const user = [userName, firstName, lastName, email, password, role];

    return userDao.signUp(user);
  }
}

module.exports = userService;
