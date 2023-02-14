let userName = prompt("What is your name?");
alert ("Hello, " + userName + ".");


const year = 2022;
let userYear = prompt ("When were you born?");
let userAge = year - userYear;
alert ("Your age is " + userAge);


let sideLength = prompt("What is the length of the side of the square?");
let perimeter = sideLength * 4;
alert ("Perimeter of the square is " + perimeter);


let circleRadius = prompt("What is the radius of the circle?");
let circleArea = Math.PI * circleRadius **2;
alert ("The area of circle is " + circleArea);


let way = prompt("How long is your journey? ( in kilometers)");
let time = prompt("How fast do you have to get there? ( in hours)");
let speed = way / time;
console.log ("You need to move at a speed of " + speed + "km/h");

const exchangeCourse = 0.94;
let dollar = prompt("How many dollars do you want to exchange?");
let euro = dollar * exchangeCourse;
alert ("You will get " + euro + " euro after exchange");