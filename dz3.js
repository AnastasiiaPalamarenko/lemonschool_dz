//3
//Написать функцию, которая транспонирует матрицу
let arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

function transponir(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let arr2 = [];
    for (let j = 0; j < arr[i].length; j++) {
      arr2.push(arr[j][i]);
    }
    newArr.push(arr2);
  }
  return newArr;
}
let transponirArr = transponir(arr);
console.log(transponirArr);
//4
//Написать функцию, которая умножает две матрицы
let matrA = [
  [5, 2],
  [1, 4],
];
let matrB = [
  [1, 3],
  [6, 2],
];
function MultiplyMatrix(matrA, matrB) {
  var rowsA = matrA.length,
    colsA = matrA[0].length,
    rowsB = matrB.length,
    colsB = matrB[0].length,
    matrC = [];
  if (colsA != rowsB) return false;
  for (var i = 0; i < rowsA; i++) matrC[i] = [];
  for (var k = 0; k < colsB; k++) {
    for (var i = 0; i < rowsA; i++) {
      var t = 0;
      for (var j = 0; j < rowsB; j++) t += matrA[i][j] * matrB[j][k];
      matrC[i][k] = t;
    }
  }
  return matrC;
}
let C = MultiplyMatrix(matrA, matrB);
console.log(C);

//5
//Найти номер столбца двумерного массива сумма которого является
//максимальной
let items = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let result = {
  targetIndex: 0,
  sum: 0,
};

for (let i = 0; i < items[0].length; i++) {
  const currentSum = items.reduce((prev, current) => prev + current[i], 0);
  if (result.sum <= currentSum) {
    result.sum = currentSum;
    result.targetIndex = i + 1;
  }
}

console.log(
  `Номер столбца двумерного массива сумма которого является максимальной - ${result.targetIndex}`
);
//6
//Удалить из массива все столбцы которые не имеют ни одного нулевого
//элемента и сумма которых положительна - оформить в виде функции
let mas = [
  [0, -2, 5, 7],
  [5, -5, 1, 0],
  [2, 3, -1, 4],
];
function cut(mas) {
  let columns = new Array(mas[0].length).fill(1);
  let res = [];
  for (let i = 0; i < mas[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < mas.length; j++) {
      if (!mas[j][i]) {
        columns[i] = 0;
        break;
      }
      sum += mas[j][i];
    }
    if (sum <= 0) {
      columns[i] = 0;
    }
  }
  for (let i = 0; i < mas.length; i++) {
    res.push([]);
    for (let j = 0; j < columns.length; j++) {
      if (columns[j]) {
        res[i].push(mas[i][j]);
      }
    }
  }
  return res;
}
let massiv = cut(mas);
console.log(massiv);
