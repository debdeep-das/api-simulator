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
     * getCars
     */
    public getCars() {
        return this.cars;
    }
    /**
     * getCar
     */
    public getCar(name: String) {
        let obj = this.cars.find((o, i) => {
            if (o.name === name) {
                console.log(this.cars[i]) 
                return true; // stop searching
            }
        });
        console.log(obj)
    }
}

export = { CarController }


