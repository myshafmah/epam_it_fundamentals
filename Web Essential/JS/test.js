var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed*time + "km");
    };
    this.driver = driver;
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(50, 'ninja man');
var myCar2 = new Car(50, 'humpty man');
var myCar3 = new Car(50, 'john man');
var myCar4 = new Car(50, 'bond man');
var myCar5 = new Car(50, 'James man');

myCar.drive(30,7);
myCar3.logDriver();