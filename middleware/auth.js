import { verify } from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).send('Unauthorized');
  }
};

export default authMiddleware;
