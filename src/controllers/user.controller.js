const userService = require("../services/user.service");

class userController {
  static async signUp(req, res) {
    const { userName, firstName, lastName, email, password, role } = req.body;

    if (
      typeof userName !== "string" ||
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof role !== "string"
    ) {
      return res
        .status(400)
        .send({ msg: "Required parameter is missing or wrong type" });
    }
    console.log("aqui");

    try {
      const result = await userService.signUp(
        userName,
        firstName,
        lastName,
        email,
        password,
        role
      );

      return res.status(200).send(result);
    } catch (error) {
      const status = error.status;

      if (status === undefined) return res.status(500).send(error);

      return res.status(status).send(error);
    }
  }
}

module.exports = userController;
