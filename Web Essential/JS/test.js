// console.log(this);

var myCar2 = {
    maxSpeed: 70, 
    driver:"Net Ninja", 
    drive:function(speed, time){
        console.log(speed*time+ "km");
    },
    // test: function(){
        // console.log(this);}
    logDriver: function(){
        console.log('driver name is ' + this.driver);
    }
};
// myCar2.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);

// var myCar3 = {
//     maxSpeed: 40, 
//     driver:"Shaun", 
//     drive:function(speed, time){
//         console.log(speed*time+ "km");
//     },
//     test: function(){
//         console.log(this);}
// };

// myCar2.test();
// myCar3.test();
myCar2.logDriver();