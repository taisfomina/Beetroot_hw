//Мінімум
// 1.Напиши всі можливі варіанти створення функцій.
/* function newFunction () {}
let newFunction = function() {}
let newFunction = () => {} */

// 2.Створи функцію, яка буде виводити кількість переданих їй аргументів.
function number(...args){
    return args.length;
}
console.log(number(1, 2, 5));
// 3.Напиши функцію, яка приймає 2 числа і повертає :
    // a)-1, якщо перше число менше, ніж друге; 
    // б)1 - якщо перше число більше, ніж друге; 
    // в)0 - якщо числа рівні.
function number(a, b){
    if (a < b){
        return -1;
    } else if (a > b){
        return 1;
    } else{
        return 0;
    }
}
console.log(number());
// 4.Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n){
    return (n != 1) ? n * factorial (n - 1) : 1;
}
console.log(factorial(4))
// 5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function str(a,b,c){
    let sum = "";
    if (str !== "Number"){
        sum = sum + a + b + c;
    }
    return sum;
}
console.log(str(1, 4, 8));
// 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function square(a, b = false){
    let sum = 0;
    if (b !== false){
        return sum = a * b;
    }else {
        return a ** 2;
    }
}
console.log(square(2, 4));
console.log(square(4));
//Норма
// 1.Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function perfectNumber(a){
    let sum = 0;
    for (let i = 0; i < a; i++){
        if (a % i === 0){
            sum += i;
        }
    }
    return sum == a ? a : false;
}
console.log(perfectNumber(6));


// 2.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function MaxMinNumber(min, max){ 
    for (let i = min; i <= max; i++){
        if(namberOne(i)){
            console.log(i);
        }
    }
}
console.log(MaxMinNumber(5, 8));

