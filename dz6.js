//1
//Посчитать количество ссылок на странице, вывести их содержимое
/*
let newlink = document.createElement('a');
newlink.innerHTML = 'Asos';
newlink.setAttribute('title', 'Asos');
newlink.setAttribute('href', 'https://www.asos.com/');
let newwlink = document.createElement('a');
newwlink.innerHTML = 'Google';
newwlink.setAttribute('title', 'Google');
newwlink.setAttribute('href', 'https://www.google.com');
document.body.appendChild(newlink);
document.body.appendChild(newwlink);
let num = document.getElementsByTagName("a").length;
document.getElementById("numLink").innerHTML = num;
//2
//Посчитать количество тегов “p” на странице которые имеют класс “phrase” - вывести их содержимое
let tag = document.querySelectorAll("p.phrase").length;
document.getElementById("numLink").innerHTML = tag;
//3
//В задании из пятого урока, взять массив со студентами и вывести их на
//страницу согласно сверстанной HTML-структуре, рядом с каждым студентом 
//вывести крестик - по нажатию на который студент будет удален (удаляется как 
//со страницы, так и с объекта), если был удален последний студент написать
//текстовое сообщение (“Студенты не найдены”
*/
let students = [
  {
    name: "Kate",
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
    name: "Ilya",
    estimate: 4,
    course: 1,
    active: false,
  },
  {
    name: "Bogdan",
    estimate: 2,
    course: 2,
    active: true,
  },
  {
    name: "Nastya",
    estimate: 5,
    course: 3,
    active: false,
  },
];

let countStudents = students.length;
let table = document.createElement("table");
table.setAttribute("id", "zen");
let tbody = document.createElement("tbody");
let tr = document.createElement("tr");
tr.innerHTML =
  "<td>Firstname</td><td>Course</td><td>estimate</td><td>Active</td>";
tbody.appendChild(tr);
let items = ["name", "course", "estimate", "active"];
for (let i = 0; i < countStudents; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < 4; j++) {
    let td = document.createElement("td");
    let item = students[i][items[j]];
    td.innerHTML = item;
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}
table.appendChild(tbody);
document.getElementById("table").appendChild(table);

let procRows = zen.querySelectorAll("tbody tr");
for (let i = 1; i < procRows.length; i++) {
  procRows[i].innerHTML += '<td><button  title="Remove" >delete</td>';
}
