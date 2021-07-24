import express from "express";
import StatusCodes from 'http-status-codes';
import carController from '../controller/CarController';

import * as config from '../config/environment.json';

const app: express.Application = express();
app.set(config.response.header.mediaType.key, config.response.header.mediaType.value);
app.use(express.json());

let cars = new carController.CarController();

app.get('/healthz', (req, res) => {
    res.status(StatusCodes.OK).send();
});

app.get('/environment', (req, res) => {
    res.status(StatusCodes.OK).send(config);
});

app.post('/reset', (req, res) => {
    cars = new carController.CarController();
    res.status(StatusCodes.OK).send(cars.getCars());
});

app.get('/car', (req, res) => {
    try {
        let response = cars.getCars();
        if (response.length <= 0) {
            res.status(StatusCodes.NOT_FOUND).send();
        } else {
            res.status(StatusCodes.OK).send(response);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }

});

app.get('/car/:name', (req, res) => {

    try {
        let response = cars.getCar(req.params.name);
        if (typeof response == 'undefined') {
            res.status(StatusCodes.NOT_FOUND).send();
        } else {
            res.status(StatusCodes.OK).send(response);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }


});

app.post('/car', (req, res) => {
    try {
        cars.addCar(req.body);
        res.status(StatusCodes.OK).send();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }

});

app.put('/car', (req, res) => {
    try {
        cars.updateCar(req.body);
        res.status(StatusCodes.OK).send();
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }

});

app.delete('/car/:name', (req, res) => {
    try {
        let status = cars.removeCar(req.params.name);
        if (status >= 0) {
            res.status(StatusCodes.OK).send();
        } else {
            res.status(StatusCodes.NOT_FOUND).send();
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }


});

app.listen(config.environment.port, config.environment.host, function () {
    console.log(`Access API on http://${config.environment.host}:${config.environment.port}`);
});