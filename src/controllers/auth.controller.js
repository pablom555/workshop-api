const authService = require('../services/auth.service');
const authValidation = require('../validations/auth.validation');

class authController {

  static async authenticate(req, res) {

    const { email, password } = req.body;
    const loginData = { email, password };

    const { err, message } = authValidation.login(loginData);

    if (err) return res.status(400).send(message);

    try {

      const result = await authService.login(loginData);

      if (result.err) return res.status(401).send({data: {message: result.message }});

      return res.status(200).send({data: {token: result.token }});

    } catch (error) {

      return res.status(500).send(error);

    }
  }
}

module.exports = authController;