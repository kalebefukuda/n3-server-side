// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
      const token = authHeader.split(' ')[1];  // Bearer <token>
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) {
              return res.status(403).json({ message: "Invalid token." });
          }
          req.user = user;
          next();
      });
  } else {
      res.status(401).json({ message: "Access denied. No token provided." });
  }
};

export default authenticateJWT;
