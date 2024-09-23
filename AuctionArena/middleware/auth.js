const jwt = require('jsonwebtoken');
const Team = require('../models/team');
const Admin = require('../models/admin');

exports.authenticate = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: "Authorization token required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, role } = decoded;
        
        let user;
        if (role === 'team') {
            user = await Team.findById(id);
        } else if (role === 'admin') {
            user = await Admin.findById(id);
        }

        if (!user) {
            throw new Error();
        }

        req.user = { id: user._id, role };
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

exports.adminAuthorization = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
      next();
  } else {
      res.status(403).json({ message: "Admin access required" });
  }
};

exports.teamAuthorization = (req, res, next) => {
  if (req.user && req.user.role === 'team') {
      next();
  } else {
      res.status(403).json({ message: "Team access required" });
  }
};


