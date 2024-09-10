function haversineDistance(source, destination) {
    const lat1 = source.latitude;
    const lon1 = source.longitude;
    const lat2 = destination.latitude;
    const lon2 = destination.longitude;

    const toRad = (value) => (value * Math.PI) / 100;

    const R = 6371; // Radius of the Earth in Kilometer
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

module.exports = {
    haversineDistance
}