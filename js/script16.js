// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
// де ім'я властивості - це ім'я співробітника,
//     а значення властивості - це зарплата.
//     Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
//     Використовуй змінну totalSalary для зберігання загальної суми зарплати.

//ТЕСТИ

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   // Change code above this line
//   return totalSalary;
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line

  let salary = Object.values(salaries);

  for (const i of salary) {
    totalSalary += i;
  }

  // Change code above this line
  return totalSalary;
}

console.log(countTotalSalary({})); // повертає 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // повертає 400
