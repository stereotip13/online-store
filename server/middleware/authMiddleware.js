const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.metod === 'OPTIONS') {
    next();
  }
  try {
    const token = req.headers.authorization.split(` `)[1]; //Bearer authorization
    if (!token) {
      return res
        .status(401)
        .json({ message: 'Не авторизован отсутствует токен' });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Не авторизован плохой токен' });
  }
};
