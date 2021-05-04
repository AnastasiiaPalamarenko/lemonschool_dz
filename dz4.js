//1
//Написать функцию которая генерирует массив случайных значений, таким
//образом что все элементы результирующего массива являются уникальными.
//Генерациями происходит в рамках чисел от N до M, где N,M - могут быть как
//положительные так и отрицательными, и еще одним параметром количество
//значений которые нужно сгенерировать. Если количество генерируемых
//значений больше чем чисел в диапазоне - отдавать пустой массив.
function random(N, M, k) {
  var arr = [],
    m = [],
    n = 0;
  if (M - N < k - 1) return;
  for (var i = 0; i <= M - N; i++) m[i] = i + N;
  for (var i = 0; i < k; i++) {
    n = Math.floor(Math.random() * m.length);
    arr[i] = m.splice(n, 1)[0];
  }
  return arr;
}
let array = random(-10, 10, 15);
console.log(array);
//2
//Использовать функцию из предыдущего задания чтобы получить массив из
//нужного количества значений. Найти процентное соотношение отрицательных,
//положительных и нулевых элементов массива.
function random(N, M, k) {
  let arr = [],
    m = [],
    n = 0;
  if (M - N < k - 1) return;
  for (let i = 0; i <= M - N; i++) m[i] = i + N;
  for (let i = 0; i < k; i++) {
    n = Math.floor(Math.random() * m.length);
    arr[i] = m.splice(n, 1)[0];
  }
  return arr;
}
let array = random(-10, 10, 15);
console.log(array);

let zeroCount = 0,
  posCount = 0,
  negativeCount = 0;
array.forEach((item) => {
  if (item === 0) {
    zeroCount++;
  } else if (item < 0) {
    negativeCount++;
  } else if (item > 0) {
    posCount++;
  }
});

console.log("ZeroCount:: " + (zeroCount * 100) / 15);
console.log("PositiveCount :: " + (posCount * 100) / 15);
console.log("NegativeCount:: " + (negativeCount * 100) / 15);

//4
//Задано предложение - подсчитать количество вхождений каждого слова в
//предложении. Вывести список уникальных слов и напротив каждого слова -
//сколько раз встретилось
let str =
  "JavaScript язык – это язык программирования, который добавляет интерактивность на ваш веб-сайт";
let arr = str.split(" ");
let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] === undefined) {
    obj[arr[i]] = 1;
  } else {
    obj[arr[i]]++;
  }
}
console.log(obj);
//5
//Написать рекурсивную функцию которая выводит абсолютно все элементы
//ассоциативного массива (объекта) - любого уровня вложенности
function show(company) {
  for (let item in company) {
    if (typeof company[item] === "object") {
      show(company[item]);
    } else {
      console.log(company[item]);
    }
  }
}

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};
show(company);
