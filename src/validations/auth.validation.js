const Joi = require('joi');

class authValidation {

  static login(userData) {

    const loginJoi = Joi.object({
      email: Joi.string().required(),
      password:Joi.string().required()
    })

    const { error } = loginJoi.validate(userData)

    if (error) return {err: true, message: error}

    return { err: false };

  }

}

module.exports = authValidation;