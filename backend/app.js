const express = require('express');
const morgan = require('morgan');

const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// MIDDLEWARES
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json()); // Data from the body is added to req

// ROUTES
app.use('/api/v1/posts', postRouter); // Mounting Routers
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => { // Non-specified url error handler
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`
    });
});

module.exports = app;