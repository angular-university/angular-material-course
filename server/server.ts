


import * as express from 'express';
import {Application} from "express";
import {readAllCourses} from "./read-all-courses.route";
const bodyParser = require('body-parser');



const app: Application = express();


app.use(bodyParser.json());


app.route('/api/courses')
    .get(readAllCourses);


// launch an HTTP Server
const httpServer = app.listen(9000, () => {
    console.log("HTTP Server running at https://localhost:" + httpServer.address().port);
});


