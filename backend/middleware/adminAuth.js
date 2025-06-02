import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;  // token is a string

    if (!token) {
      return res.status(401).json({ success: false, message: 'no token' });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (
      !token_decode==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD
    ) {
      return res.status(403).json({ success: false, message: 'user unauthorized' });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: error.message });
  }
};

export default adminAuth;
