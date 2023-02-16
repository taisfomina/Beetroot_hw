let userAge = +prompt ("How old are you?");

switch (true) {
    case (userAge >= 0 && userAge <= 11):
        alert ("You are a child")
        break;
    case (userAge >= 12 && userAge <= 17):
        alert ("You're a teen")
        break;
    case (userAge >=18 && userAge <= 59):
        alert ("You're an adult")
        break;
    case (userAge >= 60):
        alert ("You're old")
        break;
    default:
        alert ("Error")
        break;
}


let userNum = +prompt ("Input number from 0 to 9");

switch (userNum) {
    case 0:
        alert (")")
        break;
    case 1:
        alert ("!")
        break;
    case 2:
        alert ("@")
        break;
    case 3:
        alert ("#")
        break;
    case 4:
        alert ("$")
        break;
    case 5:
        alert ("%")
        break;
    case 6:
        alert ("^")
        break;
    case 7:
        alert ("&")
        break;
    case 8:
        alert ("*")
        break;
    case 9:
        alert ("(")
        break;
    default:
        alert ("Wrong number")
        break;
}




let rangeStart = +prompt ("Enter first number of your range");
let rangeEnd = +prompt ("Enter second number of your range");
let result = 0;

for (let i = rangeStart; i <=rangeEnd; i++) {
    result += i;
}
alert ("Summ of numbers in your range is " + result); 



let firstNum = +prompt ("Input first number");
let secondNum = +prompt ("Input second number");
let divider = 0;

for (let i = 1; ; i++) {
    if (i > firstNum && i > secondNum) {
        break;
    }
    if ( firstNum % i == 0 && secondNum % i == 0 ) {
        divider = i;
    }
}
alert ("Your biggest divider is " +divider); 





let num = +prompt ("Input your number");
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        alert ( "divider of your number is " +i );
    }
} 








const userNumber = confirm ("Input five numbers to create a five digit number");
let firstNumber = +prompt ("Input first number");
let secondNumber = +prompt ("Input second number");
let thirdNumber = +prompt ("Input third number");
let fourthNumber = +prompt ("Input fourth number");
let fifthNumber = +prompt ("Input fifth number");


    if (firstNumber == fifthNumber && secondNumber == fourthNumber ) {
        alert ("Number is palindrome");
    } 
    else {
        alert ("This number is not palindrome")
    } 
// Так, я знаю що зробила якусь фігню, але іншого нічого не придумалось 
 //А інші способи я якось не зрозуміла



let userPurchase = +prompt ("Enter purchase amount in dollars ");
if (userPurchase >= 200 && userPurchase < 300) {
    alert ("Your discount is 3%, now you have to pay " +userPurchase / 100 * 97 + "dollars")
}
else if (userPurchase >= 300 && userPurchase < 500) {
    alert ("Your discount is 5%, now you have to pay " +userPurchase / 100 * 95 + "dollars")
}
else if (userPurchase >= 500 ) {
    alert ("Your discount is 7%, now you have to pay " +userPurchase / 100 * 93 + "dollars")
}
else {
    alert ("You won't have a discount, you have to pay " +userPurchase +" dollars")
}



let positiveNum = 0;
let negativeNum = 0;
let zeroNum = 0;
let oddNum = 0;
let evenNum = 0;
for (let i = 1; i <= 10; i++) {
    let userNumCheck = +prompt ("Enter your number");
    if (userNumCheck > 0) {
        positiveNum++;
    }
    else if (userNumCheck < 0 ) {
        negativeNum++;
    }
    else if (userNumCheck == 0 ) {
        zeroNum++;
    }
    if (userNumCheck % 2 == 0) {
        evenNum++;
    }
    if (userNumCheck % 2 !== 0) {
        oddNum++;
    }

}
alert ("Positive numbers: " + positiveNum + " Negative numbers: " + negativeNum + " Zeros: " + zeroNum + " Odd numbers: " + oddNum + " Even numbers: " + evenNum);


let weekArr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let confirmation;
let day = 0;

do {
    confirmation = confirm ("Today is " + weekArr[day]  + " , wanna see the next day?");
    if (day == weekArr.length - 1) {
        day = 0;
    }
    else {
        day++;
    }

} while (confirmation == true);