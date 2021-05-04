//1
//Задан двумерный массив - объединить каждый внутренний массив с верхнем
//массивом - только по уникальным значениям. Например
//[1,2,4[8,4,12,],[13,29,11],[0,5,3,11],5,6,7,[3,8,21],3], получаем в результате:
//[1,2,4,8,12,13,29,11,0,5,3,6,7,21]
function isArrayValue(arr, value) {
  for (let el of arr) {
    if (el === value) {
      return true;
    }
  }
  return false;
}

function uniqueValues(arr) {
  let result = [];
  for (let item of arr) {
    if (typeof item === "object") {
      for (let itemElement of item) {
        if (!isArrayValue(result, itemElement)) {
          result.push(itemElement);
        }
      }
    } else {
      if (!isArrayValue(result, item)) {
        result.push(item);
      }
    }
  }
  return result;
}
let arr = [
  1,
  2,
  4,
  [8, 4, 12],
  [13, 29, 11],
  [0, 5, 3, 11],
  5,
  6,
  7,
  [3, 8, 21],
  3,
];
let array = uniqueValues(arr);
console.log(array);

//2
//Написать функцию которая возвращает true/false в зависимости от того - все ли
//уникальные значения в массиве или есть не уникальные
function isUnique(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

let arr = [1, 2, 3, 3, 4];
let unique = isUnique(arr);
console.log(unique);

//3
//Задан массив объектов студентов вида [{name: “Ivan”, estimate: 4, course: 1,
//active: true},{name: “Ivan”, estimate: 3, course: 1, active: true},{name: “Ivan”,
//estimate: 2, course: 4, active: false},{name: “Ivan”, estimate: 5, course: 2, active:
//true}] - заполнить его более большим количеством студентов. Написать
//функцию которая возвращает: среднюю оценку студентов в разрезе каждого
//курса: {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5} с учетом только тех студентов которые
//активны. Посчитать количество неактивных студентов в разрезе каждого курса и
//общее количество неактивных студентов.
let students = [
  {
    name: "Ivan",
    estimate: 4,
    course: 1,
    active: true,
  },
  {
    name: "Ivan",
    estimate: 3,
    course: 3,
    active: true,
  },
  {
    name: "Ivan",
    estimate: 4,
    course: 1,
    active: false,
  },
  {
    name: "Ivan",
    estimate: 2,
    course: 2,
    active: true,
  },
  {
    name: "Ivan",
    estimate: 5,
    course: 3,
    active: false,
  },
  {
    name: "Ivan",
    estimate: 5,
    course: 1,
    active: true,
  },
  {
    name: "Ivan",
    estimate: 4,
    course: 2,
    active: true,
  },
];

function AvarageScore() {
  let courses = {};
  let results = {};
  for (let student of students) {
    if (!student.active) {
      continue;
    }
    let course = courses[student.course];
    if (!course) {
      courses[student.course] = {
        studentsActive: 1,
        estimate: student.estimate,
      };
    } else {
      course.studentsActive = course.studentsActive + 1;
      course.estimate = course.estimate + student.estimate;
    }
  }
  for (let course in courses) {
    results[course] = courses[course].estimate / courses[course].studentsActive;
  }
  return results;
}

let avaragescore = AvarageScore();
console.log(avaragescore);

let res = students.reduce((ac, { course, active }) => {
  ac[course] = (ac[course] || 0) + !active;
  return ac;
}, {});

console.log(res);

function calculate(array) {
  let result = {};
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let item = array[i];
    let course = item.course;

    if (!(course in result)) result[course] = 0;
    if (!item.active) ++result[course];
  }
  return result;
}

console.log(
  "Количество неактивных студентов в разрезе курсов:",
  calculate(students)
);
