const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (token === undefined) {
    return res.status(400).json({
      errors: [{ msg: "Token not found." }],
    });
  }

  try {
    let user = await jwt.verify(token, "123456");
    req.user = user.email;
    next();
  } catch (error) {
    return res.status(400).json({
      errors: [{ msg: "Token invalid." }],
    });
  }
};
