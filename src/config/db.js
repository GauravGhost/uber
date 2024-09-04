const mongoose = require('mongoose');
const { MONGODB_URL } = require('./serverConfig');

const connectDb = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Mongodb connected");
    } catch (error) {
        console.log("Mongodb connection Error: ", error);
        process.exit(1);
    }
}


module.exports = connectDb;