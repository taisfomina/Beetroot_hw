let summ = 0.1 + 0.2;
console.log (summ.toFixed(1));



let str = "1";
let num = 2;
let result = +str + num;
console.log (result);



const fileMbSize = 820;
let capacityGb = prompt("Enter the capacity of your flash drive ( in gb)");
let capacityConverted = capacityGb * 1000;
let fileAmount = capacityConverted / fileMbSize;
alert ("You can fit " + fileAmount.toFixed(0) + " files");



let moneyAmount = prompt("How much money do you want to spend?");
let chocoPrice = prompt("The price of the chocolate you want to buy");
let chocoAmount =Math.floor( moneyAmount / chocoPrice);
let moneyRest = moneyAmount % chocoPrice;
alert ("You can buy " + chocoAmount + " chocolates and you will have " + moneyRest + "$ rest"); 


let userNum = prompt( "Enter three digit number ");
let firstNum = userNum % 10;
let secondNum = (userNum % 100 - firstNum) / 10;
let thirdNum = (userNum - (userNum % 100 - firstNum) - firstNum ) / 100;
alert ("Reversed number is " + firstNum + secondNum + thirdNum);


let userDeposit = prompt("How much money do you want to invest?");
let percent = (0.05 / 12) * 2;
let moneyReceived = userDeposit * percent;
alert ("Your income is " +moneyReceived.toFixed(2) + "$");

2 && 0 && 3 // 0
2 || 0 || 3 // 2
2 && 0 || 3 // 3