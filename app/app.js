const userRouter = require('./routes/route_account');
const createEventRouter = require('./routes/route_create_event');
const rsvpRouter = require("./routes/route_rsvp");
const jwtMiddleware = require('./middleware');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/users', userRouter);
app.use('/create_event',jwtMiddleware, createEventRouter);
app.use("/rsvp", jwtMiddleware, rsvpRouter);

app.listen(3000);

module.exports = app;