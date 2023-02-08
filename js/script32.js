// Функція addOverNum() рахує суму всіх аргументів.
// Зміни параметри і тіло функції addOverNum() таким чином,
// щоб вона рахувала суму тільки тих аргументів,
// які більші за задане число.Це число повинно бути
// першим параметром функції.

//ТЕСТИ

// Оголошена функція addOverNum()
// Виклик addOverNum(50, 15, 27) повертає 0
// Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
// Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
// Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// // Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function addOverNum(arg1, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > arg1) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(50, 15, 27)); //   повертає 0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //   повертає 71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); //   повертає 51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //   повертає 218
