/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here
class BaseSignal {
    constructor() {
        if(this.constructor.name === "BaseSignal"){ //Purpose: To ensure that the parent class cannot be instantiated again
            throw new Error("This class cannot be instantiated");
        }
    }
    send() {
        console.log(`Sending ${this.x} signal`);
    }
}

class TvSignal extends BaseSignal {
   
    constructor(){
        // Add code here
        super();
        this.x = "tv";
    }
}

class AirconSignal extends BaseSignal {
    constructor(){
        // Add code here
        super();
        this.x = "door";
    }
}

class DoorSignal extends BaseSignal {
    constructor(){
        // Add code here
        super();
        this.x = "aircon";
    }
}

const tv = new TvSignal();
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal();
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal();
aircon.send(); // prints "Sending aircon signal"*/

//const myvar1 = new BaseSignal(); //This should throw an error
//myvar1.send