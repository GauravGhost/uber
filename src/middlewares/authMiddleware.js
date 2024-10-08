const jwt = require('jsonwebtoken')
const User = require('../models/user');
const { JWT_SECRET } = require('../config/serverConfig');
const catchFn = require('../utils/catchFn');
const ApiError = require('../utils/apiError');
const verifyAuth = async (token) => {
    const payload = jwt.verify(token, JWT_SECRET);
    if (!payload) {
        throw new Error("Payload not found");
    }
    const user = await User.findById(payload.userId);
    if (!user) {
        throw new Error("User not found");
    }
    return user;
}

const authMiddleware = catchFn( async (req, res, next) => {
    // Get Token from the header in the request
    const { authorization } = req.headers;
    if (!authorization && !authorization?.startsWith('Bearer')) {
        throw new ApiError(401, "Unauthorized");
    }
    const token = authorization.split(' ')[1];
    const user = await verifyAuth(token);
    delete user.password;
    req.user = user;
    next();
})

module.exports = authMiddleware;