'use strict';

const express = require('express');
const app = express();  
const path = require('path');
const bodyParser = require('body-parser')
const ROOT_PATH = path.resolve();
const port = process.env.PORT || 3000;    
const apiRoutes = require('./routes');
const json_body_parser = bodyParser.json();
const urlencoded_body_parser = bodyParser.urlencoded({ extended: true });

app.use(json_body_parser);
app.use(urlencoded_body_parser);

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
