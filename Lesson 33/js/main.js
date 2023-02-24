//Мінімум

let myAuto = {
  company: "SUZUKI",
  model: "Jimny",
  year: 2019,
  avrgSpeed: 145,
  fuelVolume: 40,
  fuelConsume: 7.3,
  driver: 'Bolt',
fuelActual: 5,
}; 

//1
function showInfo(auto) {
  console.log(
`
Виробник: ${auto.company}
  Модель: ${auto.model}
  Рік виготовлення: ${auto.year}р.
  Середня швидкість: ${auto.avrgSpeed}км/год
  Ємність паливного бака: ${auto.fuelVolume}л
  Середня витрата палива: ${auto.fuelConsume}л
Водій: ${auto.driver}
Залишок палива: ${auto.fuelActual}л
  `
);
}
showInfo(myAuto);

//2
function addDriver(auto){
let newDriver = prompt('Хто новий водій твого авто?', 'Володимир')
auto.driver = newDriver
}
addDriver(myAuto);
showInfo(myAuto);

//3
function addFuel(auto){
  let addingLitres = +prompt('Скільки палива вам залити?', '10');
  auto.fuelActual += addingLitres
  if (auto.fuelActual > auto.fuelVolume)  auto.fuelActual = 40
}
addFuel(myAuto);
showInfo(myAuto);

//4
function getTravelTime(auto){
let distance = +prompt('Вкажіть дистанцію вашої поїздки!', 500)
let travelDriver = prompt('Хто зараз за кермом?', 'Віктор')
let fuelNeed = (auto.fuelConsume / 100) * distance;

if (travelDriver != auto.driver) {
  console.log(`Водій цього авто ${auto.driver}, а не ${travelDriver}! Поїздка відміняється!`)
  return
}	
if (fuelNeed > auto.fuelActual){ 
  console.log(`
  У вас ${auto.fuelActual}л палива! 
  Цього не достатньо для поїздки! 
  Вам треба ще ${fuelNeed - auto.fuelActual}л!`)
  return
}
let raceTime = distance / auto.avrgSpeed;
let relaxTime = Math.round(raceTime / 4);
let travelTime = (relaxTime + raceTime).toFixed(2);

console.log(`Ваша поїздка триватиме ${travelTime} годин!`);
}	
getTravelTime(myAuto)

//НОРМА

let myTime = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

//1
function addZero(number) {
if (number < 10) number = '0' + number
else number = number;
return number;
}
function showTime(time){
let hours = addZero(time.hours);
let minutes = addZero(time.minutes);
let seconds = addZero(time.seconds);
console.log(`Твій час: ${hours}:${minutes}:${seconds}`);
}
showTime(myTime)

//2
function addSeconds(time){
let addedSeconds = +prompt('Скільки секунд додати?', '70')
let newSeconds = time.seconds + addedSeconds
if (newSeconds >= 3600){
  let newHours = Math.round(newSeconds / 3600)
  time.hours = newHours;
} else if (newSeconds >= 60) {
  let newMinutes = Math.round(newSeconds / 60)
  time.minutes = newMinutes;
  time.seconds = newSeconds % 60
} else {
  time.seconds = newSeconds;
}
}
addSeconds(myTime)
showTime(myTime)

//3
function addMinutes(time){
let addedMinutes = +prompt('Скільки хвилин додати', '70')
let newMinutes = time.minutes + addedMinutes
if (newMinutes >= 1440){
  let newHours = Math.round(newMinutes / 1440)
  time.hours = newHours;
} else if (newMinutes >= 60) {
  let newHours = Math.round(newMinutes / 60)
  time.hours = newHours;
  time.minutes = newMinutes % 60;
} else {
  time.minutes = newMinutes;
}
}

addMinutes(myTime)
showTime(myTime)

//4
function addHours(time){
let addedHours = +prompt('Скільки годин додати', '49')
let newHours = time.hours + addedHours;
if (newHours >= 24){
  time.hours = newHours % 24;
} else {
  time.hours = newHours;
}
}
addHours(myTime)
showTime(myTime)
//встановлення часу гралась ще так, створивши в html вивод кнопочками з підсумком,
//але мені здається треба було через querySelectorAll,бо в мене так не працювало,та ми ще 
//не дійшли до цього і я залишила цю ідею

// const day = new Date();
// document.querySelector('.time__display').innerHTML = day;

// let changedMinutes = 3;
// let changedSeconds = 3;
// let changedHours = 3;

// document.querySelector('.change__seconds').onclick = () => {
//     getTimeWithChangedSeconds();
    
// }

// function getTimeWithChangedSeconds() {
//     let t = new Date(Date.now() + (changedSeconds * 1000))
//     document.querySelector('.time__display').innerHTML = t;

// }

// document.querySelector('.change__minutes').onclick = () => {
//     getTimeWithChangedMinutes();
    
// }

// function getTimeWithChangedMinutes() {
//     let t = new Date(Date.now() + (changedMinutes * 1000) * 60)
//     document.querySelector('.time__display').innerHTML = t;
// }

// document.querySelector('.change__hours').onclick = () => {
//     getTimeWithChangedHours();
    
// }

// function getTimeWithChangedHours() {
//     let t = new Date(Date.now() + (changedHours * 1000) * 3600); 
//     document.querySelector('.time__display').innerHTML = t;
// }


  








//  Об'єкт, що описує звичайний дріб теж були ідеї,але я знову вже відстаю і це теж не вийшло
// const Fraction = {
//     numerator: 0, 
//     denominator: 1, 
//   };
  
//  Метод для складання двох дробів
//   Fraction.add = function(fraction) {
//     const result = Object.create(Fraction); 
//     result.numerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
//     result.denominator = this.denominator * fraction.denominator;
//     return result.reduce(); 
//   };
  
//   // Метод для віднімання двох дробів
//   Fraction.subtract = function(fraction) {
//     const result = Object.create(Fraction); 
//     result.numerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
//     result.denominator = this.denominator * fraction.denominator;
//     return result.reduce(); 
//   };
  
//   // Метод для множення двох дробів
//   Fraction.multiply = function(fraction) {
//     const result = Object.create(Fraction); 
//     result.numerator = this.numerator * fraction.numerator;
//     result.denominator = this.denominator * fraction.denominator;
//     return result.reduce(); 
//   };
  
  // Метод для ділення двох дробів
//   Fraction.divide = function(fraction) {
//     const result = Object.create(Fraction); 
//     result.numerator = this.numerator * fraction.denominator;
//     result.denominator = this.denominator * fraction.numerator;
//     return result.reduce(); 
//   };
  



// a.numerator = 1;
// a.denominator = 2;

// const b = Object.create(Fraction);
// b.numerator = 3;
// b.denominator = 4;

// const sum = a.add(b); 
//  { numerator: 5, denominator}
// class Fraction {
//     constructor(numerator, denominator) {
//     }
  
//     add(otherFraction) {
//     }
  
//     subtract(otherFraction) {
//     }
  
//     multiply(otherFraction) {
//     }
  
//     divide(otherFraction) {
//     }
  
//     simplify() {
//     }
  
//     toString() {
//     }
//   }
  

  