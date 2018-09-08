function Ninja(name) {
    var self = this;
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = () => {
        console.log('My Ninja Name is ' + this.name);
        return this;
    };
    this.showStats = () => {
        console.log('Name: ', this.name);
        console.log('Health: ', this.health);
        console.log('Speed: ', speed);
        console.log('Strength: ', strength);
        return this;
    };
    this.drinkSake = () => {
        this.health += 10;
        console.log('added 10 health');
        return this;
    };
    this.punch = (otherNinja) => {
        otherNinja.health -= 5;
        console.log(otherNinja.name + ' was punched by ' + this.name
         + ' and just lost 5 Health!');
        return this;
    };
    this.kick = (otherNinja) => {
        let damage = 15 * this.strength;
        console.log("damage is: " + damage);
        console.log("self.strenght is: " + self.strength);
        console.log('other ninjass health is:' + otherNinja.health);
        otherNinja.health -= damage;
        console.log('other ninjass health NOW is:' + otherNinja.health);
        console.log(otherNinja.name + ' was kicked by ' + this.name 
        + ' and just lost ' + damage + ' Health!');
        return this;
    };
    
}



