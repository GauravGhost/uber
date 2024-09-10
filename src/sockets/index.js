const locationRepository = require('../repositories/locationRepository')

function socketHandler(socket) {
    socket.on('registerDriver', async (driverId) => {
        await locationRepository.setDriverSocket(driverId, socket.id);
    });

    socket.on('disconnect', async() => {
        const driverId = await locationRepository.getDriverSocket(socket.id);
        await locationRepository.deleteDriverSocket(driverId);
    })
};



module.exports = { socketHandler }