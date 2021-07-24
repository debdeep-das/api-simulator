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
        return this.cars;
    }

    /**
     * getCar : Gets details of a car by name
     */
    public getCar(name: String) {
        return this.cars.find(c => c.name == name);
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
        this.cars.push(car);
        return this.cars;
    }

    /**
     * updateCar
     */
    public updateCar(details:{name: String, trim:String}) {
        this.cars.find(c => c.name == details.name)?.trim.push(details.trim);
        return this.getCar(details.name);
        
        
        
    }

}

export = { CarController }


