require('@babel/register');
const express = require('express');
const serverConfig = require('./config/serverConfig');
const mainRouter = require('./routes/views/main.routes');

const PORT = process.env.PORT ?? 3000;
const app = express();

// config
serverConfig(app);

// routes
app.use('/', mainRouter);

// listen
app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
