

import * as express from 'express';

import {Application} from "express";

const bodyParser = require('body-parser');



const app: Application = express();



app.use(bodyParser.json());



// launch an HTTP Server
const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at https://localhost:" + httpServer.address().port);
});

