// Create a class called Vehicle
class Vehicle{

    // constructor (keyword)
    // this (keyword)
    // a constructor is called when a new instace of the class is created
    constructor(make, model, year){
        this.make = make;       // property
        this.model = model;     // property
        this.year = year;       // property
        this.distanceTraveled = 0;    // property, default value upon instantiating
    }

    // method common to all vehicles
    travel(distance){
        this.distanceTraveled += distance;     // cumulatively add distances passed in
        console.log(`The ${this.year} ${this.make} ${this.model} has been driven ${distance} units (km).`);
    }

    // method to get the total distance travelled
    getTotalDistance(){
        return this.distanceTraveled;
    }
}

const myTransport = new Vehicle("Toyota", "Raize", "2022");
myTransport.travel(100);   // yesterday 100km
myTransport.travel(50);    // today 50km

console.log(`My transport has travelled a total of ${myTransport.getTotalDistance()} km.`);

//module.exports = Vehicle;   // class Vehicle is exported

export default Vehicle; //Modern (ES6+)