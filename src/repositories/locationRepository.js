const { redisClient } = require('../config/redisClient');


class LocationRepository {
    async setDriverSocket(driverId, socketId) {
        await redisClient.set(`driver:${driverId}`, socketId);
    }

    async getDriverSocket(driverId) {
        return await redisClient.get(`driver:${driverId}`);
    }

    async deleteDriverSocket(driverId) {
        await redisClient.del(`driver:${driverId}`);
    }
}

module.exports = new LocationRepository();