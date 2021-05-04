//1
//Переменная содержит в себе строку. Вывести строку в обратном порядке.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello, world!"));
//2
//Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.
let number = prompt("Введите целое число:");
let total = 1;
for (i = 0; i < number; i++) {
  total = total * (number - i);
}
console.log(number + "! = " + total);
//3
//Дано число - вывести первые N делителей этого числа нацело.
let number = prompt("Введите целое число:"),
  output = [];
for (let i = 0; i != number; i++) {
  if (number % i == 0) output.push(number / i);
}
var N = prompt("Введите количество первых делителей:");
console.log(output.slice(0, N));
//4
//Найти сумму цифр числа которые кратны двум

let number = prompt("Введите число:");
let sum = 0;
while (number > 0) {
  let n = number % 10;
  if (n % 2 === 0) {
    sum += n;
  }
  number = parseInt(number / 10);
}
console.log(sum);

//5
//Найти минимальное число которое больше 300 и нацело делиться на 17
console.log(17 * Math.ceil(300 / 17));

//6
//Заданы две переменные для двух целых чисел,
//найти максимальное общее значение которое нацело делит два заданных числа.
let number1 = prompt("Введите целое число:");
let number2 = prompt("Введите целое число:");
for (let i = number1; i > 0; i--) {
  if (number1 % i == 0 && number2 % i == 0) {
    console.log(i);
    break;
  }
}
