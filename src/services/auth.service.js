const tokenService = require('./token.service');
const userDao = require('./../dao/user.dao');

class authService {

  static async login( { email, password }) {

    const user = await userDao.getUser(email, 'email');

    if (user.length === 0) return {err: true, message: 'User or Password Incorrect'};

    if (user[0].passwordEncrypted !== password) return {err: true, message: 'User or Password Incorrect'};

    const payload = {
      check: true,
      role: user[0].role
    };

    const token = await tokenService.encodeToken(payload, process.env.SECRET, 7200);

    return { err: false, token };

  }
}

module.exports = authService;