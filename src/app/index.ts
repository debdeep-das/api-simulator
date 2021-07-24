import express from "express";
import StatusCodes from 'http-status-codes';
import carController from '../controller/CarController';

import * as config from '../config/environment.json';

const app: express.Application = express();
const cars = new carController.CarController();

app.get('/healthz', (req, res) => {
    res.status(StatusCodes.OK).send();
});

app.get('/environment', (req, res) => {
    res.status(StatusCodes.OK).send(config);
});

app.get('/car', (req, res) => {
    res.setHeader(config.response.header.mediaType.key, config.response.header.mediaType.value);
    return res.status(StatusCodes.OK).send(cars.getCars());
});

app.get('/car/:name', (req, res) => {
    let car = cars.getCar(req.params.name);
    return res.status(StatusCodes.OK).send(car);
});

app.post('/car', (req, res) => {

});

app.put('/car', (req, res) => {

});

app.delete('/car', (req, res) => {

});

app.listen(config.environment.port, config.environment.host, function () {
    console.log(`Access API on http://${config.environment.host}:${config.environment.port}`);
});