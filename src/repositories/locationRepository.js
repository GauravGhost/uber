const { redisClient } = require('../config/redisClient');


class LocationRepository {
    async setDriverSocket(driverId, socketId) {
        try {
            await redisClient.set(`driver:${driverId}`, socketId);
        } catch (error) {
            throw error;
        }
    }

    async getDriverSocket(driverId) {
        try {
            return await redisClient.get(`driver:${driverId}`);
        } catch (error) {
            throw error;
        }
    }

    async deleteDriverSocket(driverId) {
        try {
            await redisClient.del(`driver:${driverId}`);
        } catch (error) {
            throw error;
        }
    }

    async addDriverLocation(driverId, latitude, longitude) {
        try {
            await redisClient.sendCommand(['GEOADD', 'drivers', latitude.toString(), longitude.toString(), driverId.toString()]);
        } catch (error) {
            throw error;
        }
    }

    async findNearByDrivers(longitude, latitude, radiusKm) {
        try {
            const nearByDriver = redisClient.sendCommand([
                'GEORADIUS',
                'drivers',
                longitude.toString(),
                latitude.toString(),
                'km',
                'WITHCOORD'
            ]);
            return nearByDriver;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new LocationRepository();