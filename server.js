'use strict';

const express = require('express');
const app = express();  
const path = require('path');
const bodyParser = require('body-parser')
const ROOT_PATH = path.resolve();
const port = process.env.PORT || 3000;    
const apiRoutes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});
