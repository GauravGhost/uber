const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/serverConfig')

const accessToken = async (user) => {
    const payload = {
        userId: user._id,
        email: user.email
    }

    const token = jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: '1d' }
    )
    return token
}


module.exports = accessToken