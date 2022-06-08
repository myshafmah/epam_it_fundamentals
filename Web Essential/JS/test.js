var arr = new Array();
arr[0] = 8;
arr[1] = "Hello";
arr[2] = true;

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
console.log(myCar.driver)
myCar.drive = function(){console.log("now driving");};
myCar.drive();

var myCar2 = {
    maxSpeed: 70, 
    driver:"Net Ninja", 
    drive:function(speed, time){
        console.log(speed*time+ "km");
    }
};
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);