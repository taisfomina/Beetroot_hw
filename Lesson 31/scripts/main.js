//Normal, 1-st task
let palindrome = prompt(`Вкажіть будь-яке число для перевірки на паліндром( не менше 2-х цифр).`);
let n = 0;

for (let i = 0; i < Math.floor(palindrome.length / 2); i++) {

    if (palindrome.charAt(i) == palindrome.charAt(palindrome.length - 1 - i)) {
        n++;
    } else {
        break
    }
}
if (n == Math.floor(palindrome.length / 2)) {
    alert(`Це дійсно паліндром.`);
} else {
    alert(`Це число не є паліндромом.`);
}

// Normal, 2-nd task

let usersPrice = +prompt(`Яка сума Вашої покупки?`);
console.log(usersPrice);
let usersDiscount;
let userSumm;

function whatADiscount() {
    if (usersPrice >= 200 && usersPrice <= 300) {
        usersDiscount = +usersPrice * 0.03;
    } else if (usersPrice > 300 && usersPrice < 500) {
        usersDiscount = +usersPrice * 0.05;
    } else if (usersPrice >= 500) {
        usersDiscount = +usersPrice * 0.07
    } else {
        usersDiscount = 0

    }
    userSumm = usersPrice - usersDiscount;

    return userSumm;
}
whatADiscount()
alert(`Сума зі знижкою: ${userSumm}грн. Знижка : ${usersDiscount} грн.`);

//Normal, 3-rd task

let userNum = prompt('Введіть десять чисел у форматі: число, число,.. ');
let userArray = userNum.split(',', 10);
let posNum = 0,
    negNum = 0,
    zero = 0,
    odd = 0,
    even = 0;

for (let i = 0; i < userArray.length; i++) {

    if (userArray[i] > 0) {
        posNum++;
    } else if (userArray[i] < 0) {
        negNum++
    } else if (userArray[i] == 0) {
        zero++
    }
    if (userArray[i] % 2 == 0) {
        odd++
    } else {

        even++
    }
}
alert(`Ви ввели: ${posNum} позитивних значень, ${negNum} негативних значень, ${zero} нулів. З них: ${odd} парні and ${even} непарні.`);

//Normal, 4-th task

let weekArr = [`Понеділок`, `Вівторок`, `Середа`, `Четвер`, `П'ятниця`, `Субота`, `Неділя`];
let question;
let day = 0

do {
    question = confirm(`${weekArr[day]}. Чи хочеш побачити наступний день тижня?`);
    if (day == weekArr.length - 1) {
        day = 0
    } else {
        day++
    }

} while (question == true);

//Hard, 1-st task

function game() {
    let min = 0;
    let max = 100;
    let middle = Math.floor((min + max) / 2);
    for (;;) {

        let awnser = prompt(`Твоє число більше, менше, чи дорівнює числу  ${middle}?`)
        if (awnser === "<") {
            max = middle;
            middle = Math.floor((min + max) / 2);
            if (max == middle) {
                middle -= 1;
            }
            console.log(middle);

        } else if (awnser === ">") {
            min = middle;
            middle = Math.floor((min + max) / 2);
            if (min == middle) {
                middle += 1;
            }
            console.log(middle);
        } else if (awnser === "=") {
            max = middle;
            min = middle;
            alert(`Твоє число:  ${ middle }.`);
            break
        } else {
            alert('Відповідь надана не по правилам. Якщо ти бажаєш завершити гру, закрий сторінку');
            continue
        }
    }
}
restart:
    for (;;) {
        let startOfGame;
        alert(`Вітаю у грі "Вгадай число".
Ти загадуєш число від 0 до 100, программа у тебе запитує чи це число більше, менше або дорівнює тому, що ти загадав.
Ти маєш вводити символи у поле, для того щоб надати відповідь:
"=" - якщо вгадав,
">" - якщо більше за те число, яке видав інтерфейс,
"<" - якщо менше за те число, яке видав інтерфейс.
Приємної гри.`);
        game();
        startOfGame = confirm(`Чи хочеш ти зіграти ще раз?`)
        if (startOfGame == true) {
            continue restart
        } else {
            alert(`Якщо закортить пограти ще, перезавантаж сторінку.
            Гарного дня! ♥`)
            break
        }
    }

//Hard, 2-nd task

let a;
let b;
let summ;
console.log(`Табличка множення.
Множимо на 2`);

for (a = 2; a <= 9; a++) {
    for (b = 1; b <= 10; b++) {
        summ = a * b;
        console.log(`${a} x ${b} = ${summ}`)

    }
    if (a == 9) {
        break
    }
    console.log(`
        Множимо на ${a + 1}
        `)
}

//Hard, 3-rd task
let userDate = prompt(`Вкажіть дату у форматі РРРР-ММ-ДД`);
let nextDate = new Date(userDate);
nextDate.setDate(nextDate.getDate() + 1);
let date = nextDate.toISOString().split(`T`)[0];
alert(`Наступна дата: ${date}.`);
