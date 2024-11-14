import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")?.[1];
  if (!token) {
    return res.status(403).send({ message: "No token provided." });
  }

  jwt.verify(token, "your_secret_key", (err, user) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized." });
    }

    req.user = user;
    next();
  });
};

export default authenticateToken;
