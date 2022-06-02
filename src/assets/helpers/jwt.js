const { sign, verify } = require("jsonwebtoken");
const {User} = require("../models");

const createTokens = (user) => {
  const accessToken = sign(
    { nickname: user.nickname, id: user.id },
    "jwtsecretplschange"
  );

  return accessToken;
};

const validateToken = async (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];

  try {
    const payload = verify(accessToken, "jwtsecretplschange");
    if (payload) {
      res.locals.currentUser =  await User.findOne({ where: { nickname: payload.nickname } });
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(401).json({ error: err });
  }
};

module.exports = { createTokens, validateToken };