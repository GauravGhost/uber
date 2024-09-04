const jwt = require('jsonwebtoken')
const User = require('../models/user');
const { JWT_SECRET } = require('../config/serverConfig');

const authMiddleware = async (req, res, next) => {
    // Get Token from the header in the request
    const token = req.header('Authorization').replace('Bearer ', '')
    if(!token) {
        throw new Error("Invalid authorization");
    }
    const isValid = jwt.verify(token, JWT_SECRET);
    if(isValid){
        next();
    } else {
        throw new Error("Unauthorized access");
    }
}