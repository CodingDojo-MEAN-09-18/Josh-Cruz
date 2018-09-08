// Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed(private)
// strength(private)
// Speed and strength should be 3 by default.Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add + 10 Health to the Ninja
// Example Outputs

function Ninja(name) {
    var self = this;
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = () => {
        console.log("My Ninja Name is " + this.name);
        return this;
    }
    this.showStats = () => {
        console.log("Name: ", this.name);
        console.log("Health: ", this.health);
        console.log("Speed: ", speed);
        console.log("Strength: ", strength);
        return this;
    }
    this.drinkSake = () => {
        this.health += 10;
        console.log("added 10 health")
        return this;
    }
    
}