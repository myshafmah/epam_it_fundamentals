var my_date = new Date();
console.log(my_date);

var my_past_date=new Date(1545,11, 2, 10, 12, 45);
var my_future_date= new Date(2515,0,31, 10, 12, 45);
console.log(my_past_date);
console.log(my_future_date);

var birthday = new Date(1985,0,15,11,15,25);
var birthday2 = new Date(1985,0,15,11,15,25);
console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday.getTime()==birthday2.getTime()){
    console.log('birthdays are equal');
}else{
    console.log('birthdays are not equal')}