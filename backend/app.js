const express = require('express');
const morgan = require('morgan');

const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json()); // Data from the body is added to req

// ROUTES
app.use('/api/v1/posts', postRouter); // Mounting Routers
app.use('/api/v1/users', userRouter);

module.exports = app;