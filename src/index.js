const express = require('express');
const http = require('http');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./router/authRoutes');
// const bookingRoutes = require('./router/bookingRoutes')
const passengerRoutes = require('./router/passengerRoutes')
// const driverRoutes = require('./router/driverRoutes');
const { PORT } = require('./config/serverConfig');
const { redisClient } = require('./config/redisClient');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
const server = http.createServer(app);


app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const io = null;
app.use('/api/auth', authRoutes);
// app.use('api/bookings', bookingRoutes(io));
// app.use('api/drivers', driverRoutes);
app.use('/api/passengers', passengerRoutes(io));

app.use(errorHandler);
server.listen(PORT, async () => {
    console.log('Server started on port ' + PORT);
    await db();
})