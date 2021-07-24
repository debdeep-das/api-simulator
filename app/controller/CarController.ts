import { StatusCodes } from "http-status-codes";
import hyundai from "../model/car/hyundai/car.json"
import mustang from "../model/car/mustang/car.json"

class CarController {
    private cars: Array<{
        name: String,
        makers: String,
        variant: String,
        engine: {
            type: String,
            maxPower: String,
            maxtorque: String
        },
        trim: Array<String>
    }> = [];

    constructor() {
        this.cars.push(hyundai);
        this.cars.push(mustang);
    }

   
    /**
     * getCars: Gets list of cars 
     */
    public getCars() {
        try {
            return this.cars
        } catch (error) {
            console.error(error);
            throw error;
        }

    }

    /**
     * getCar : Gets details of a car by name
     */
    public getCar(name: String) {
        try {
            return this.cars.find(c => c.name == name);            
        } catch (error) {
            console.error(error);
           throw error;
        }


    }

    /**
     * addCar: Adds a car to the list 
     */
    public addCar(car: {
        name: String,
        makers: String,
        variant: String,
        engine: {
            type: String,
            maxPower: String,
            maxtorque: String
        },
        trim: Array<String>
    }) {
        try {
            this.cars.push(car);         
        } catch (error) {
            console.error(error);
            throw error;
        }

    }

    /**
     * updateCar
     */
    public updateCar(details: { name: String, trim: String }) {
        try {
            this.cars.find(c => c.name == details.name)?.trim.push(details.trim);
        } catch (error) {
            console.error(error);
            throw error;
        }


    }

    /**
     * removeCar
     */
    public removeCar(name: String) {
        try {
            let index = - 1;
            index = this.cars.findIndex(c => c.name == name);
            if ( index > -1){
                this.cars.splice(index,1);
            }
           return index;
        } catch (error) {
            console.error(error);
            throw error;
        }

    }

}

export = { CarController }


