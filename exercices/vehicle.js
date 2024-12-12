class Vehicle {
    move() {
        console.log("The vehicle move.");
    }
}

class Car extends Vehicle {
    beep() {
        console.log("The car beeps.");
    }
}

class Boat extends Vehicle {
    moor() {
        console.log("The boat is moored to the quay.");
    }
}

(function () {
    const vehicle = new Vehicle();
    const car = new Car();
    const boat = new Boat();

    vehicle.move();
    car.move();
    car.beep();
    boat.move();
    boat.moor();
})();