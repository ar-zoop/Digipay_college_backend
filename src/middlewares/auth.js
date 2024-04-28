const jwt = require('jsonwebtoken');
const {ServerConfig}= require('../config');
const jwtSecret = ServerConfig.JWT_SECRET ;

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expired' });
      } else {
        return res.status(401).json({ error: 'Invalid token' });
      }
    }
    
    // Token is valid, you can access user information from decoded object
    req.user = decoded;
    next();
  });
}

module.exports = {
    verifyToken,
}
