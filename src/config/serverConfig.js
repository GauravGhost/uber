const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
    MONGODB_URL: process.env.MONGODB_URL,
    REDIS_URI: process.env.REDIS_URI,
    PORT: process.env.PORT,
}