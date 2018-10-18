class Bike {
  price: number
  max_speed: string
  miles: number

  constructor(price, max_speed, miles?: number) {
    price = this.price,
      max_speed = this.max_speed,
      miles = 0 + this.miles
  }

  display = () => {
    console.log("The Price is " + this.price);
    console.log("The Max MPH are " + this.max_speed);
    console.log("The current miles are  " + this.miles);
    return this
  };

  ride = () => {
    console.log("Riding...");
    this.miles += 10
    return this

  };

  reverse = () => {
    console.log("Reversing...");
    if (this.miles <= 5) {
      this.miles = 0;
    } else {
      this.miles -= 5
    }
    return this

  }


}

let bike1 = new Bike(450, "21MPH");
let bike2 = new Bike(250, "11MPH");
let bike3 = new Bike(99, "15MPH", 70);


bike3.display().ride().ride().ride().reverse().display();
bike2.ride().ride().reverse().reverse().display();
bike1.reverse().reverse().reverse().display();

