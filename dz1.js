//1
//Переменная хранит в себе значение от 0 до 9.
//Написать скрипт который будет выводить слово “один”, если переменная хранит значение 1.
//Выводить слово “два” - если переменная хранит значение 2, и т.д. для всех цифр от 0 до 9. Реализовать двумя способами.
let number = prompt("Введите число от 0 до 9:");
switch (number) {
  case "0":
    console.log("ноль");
    break;
  case "1":
    console.log("один");
    break;
  case "2":
    console.log("два");
    break;
  case "3":
    console.log("три");
    break;
  case "4":
    console.log("четыре");
    break;
  case "5":
    console.log("пять");
    break;
  case "6":
    console.log("шесть");
    break;
  case "7":
    console.log("семь");
    break;
  case "8":
    console.log("восемь");
    break;
  case "9":
    console.log("девять");
    break;
  default:
    console.log("нет таких значений");
}

let number = prompt("Введите число от 0 до 9:");
if (number == 0) {
  console.log("ноль");
} else if (number == 1) {
  console.log("один");
} else if (number == 2) {
  console.log("два");
} else if (number == 3) {
  console.log("три");
} else if (number == 4) {
  console.log("четыре");
} else if (number == 5) {
  console.log("пять");
} else if (number == 6) {
  console.log("шесть");
} else if (number == 7) {
  console.log("семь");
} else if (number == 8) {
  console.log("восемь");
} else if (number == 9) {
  console.log("девять");
}
//2
//Переменная хранит в себе значение, напишите скрипт которое выводит
//информацию о том, что число является нулевым либо положительным либо
//отрицательным.
let number = prompt("Введите число:");
if (number == 0) {
  console.log("Ваше число равно 0");
} else if (number > 0) {
  console.log("Ваше число положительное");
} else if (number < 0) {
  console.log("Ваше число отрицательное");
}
//3
//Переменная хранит в себе единицу измерения одно из возможных значений
//(Byte, KB, MB, GB), Вторая переменная хранит в себе целое число. В
//зависимости от того какая единица измерения написать скрипт, который
//выводит количество байт. Для вычисления принимает счет что в каждой
//последующей единицы измерения хранится 1024 единиц более меньшего
//измерения
let unit = prompt("Введите еденицу измерения:");
let number = prompt("Введите целое число:");
if (unit == " Byte") {
  console.log(number + unit);
} else if (unit == "KB") {
  console.log(number * 1024 + " Byte");
} else if (unit == "MB") {
  console.log(number * Math.pow(1024, 2) + " Byte");
} else if (unit == "GB") {
  console.log(number * Math.pow(1024, 3) + " Byte");
}

//4
//Переменная хранит процент кредита, вторая переменная хранит объем тела
//кредита, третья переменная хранит длительность кредитного договора в годах.
//Написать скрипт который вычислит:
//Сколько процентов заплатит клиент за все время
//Сколько процентов заплатит клиент за все время
//Какое общее количество денежных средств клиента банка выплатит за все года
let percent = 5;
let credit = 50000;
let years = 10;
let percentAll = (credit / 100) * percent * 10;
console.log(percentAll + " процентов заплатит клиент за " + years + " лет");
let percentYear = (credit / 100) * percent;
console.log(percentYear + " процентов заплатит клиент за один год");
let allMoney = percentAll + credit;
console.log(allMoney + " клиент выплатит за все года");
