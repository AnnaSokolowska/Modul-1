"use strict";

const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
];
const failedStudents = ["Сидоров", "Смирнов", "Попов"];
const filter = (arr1, arr2) => {
  const passStudent = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr2.includes(arr1[i]))) {
      passStudent.push(arr1[i]);
    }
  }

  return passStudent;
};

const result = filter(allStudents, failedStudents);
console.log(result);
