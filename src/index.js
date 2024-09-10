const express = require('express');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io')

const { PORT } = require('./config/serverConfig');
const { errorHandler } = require('./middlewares/errorHandler');
const db = require('./config/db');
const { redisClient } = require('./config/redisClient');
const { socketHandler } = require('./sockets');
const apiRoutes = require('./router')

// Server Configurations
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://127.0.0.1:3000",
        methods: ['GET', 'POST']
    },
});

// Express Middlewares.
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API Routes.
app.use('/api', apiRoutes(io));

// Global Error Handling.
app.use(errorHandler);

// Server Connection.
server.listen(PORT, async () => {
    console.log('Server started on port ' + PORT);
    await db();
});

// Event trigger upon setting up the connection with redis server.
redisClient.on('connect', () => {
    console.log('Connected to redis server');
});

// Event trigger For Handling the socket.io events.
io.on('connection', (socket) => {
    socketHandler(socket);
});
