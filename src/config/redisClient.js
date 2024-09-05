const redis = require('redis');
const { REDIS_URI } = require('./serverConfig');

const redisClient = redis.createClient({
    url: REDIS_URI,
});

redisClient.on('connect', () => {
    console.log('Connected to redis server');
});

redisClient.on('error', (err) => {
    console.error('Error connecting to redis server:', err);
    process.exit(1);
});

redisClient.connect();
module.exports = { redisClient }