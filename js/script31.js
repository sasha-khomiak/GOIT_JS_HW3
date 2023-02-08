// Використовуючи операцію rest, доповни код функції add()
// таким чином, щоб вона приймала будь - яку кількість аргументів,
// рахувала і повертала їх суму.

//ТЕСТИ

// Оголошена функція add
// Функція add використовує параметр args
// Для збирання аргументів у змінну args, у підписі функції використовується синтаксис ... (оператор rest)
// Виклик add(15, 27) повертає 42
// Виклик add(12, 4, 11, 48) повертає 75
// Виклик add(32, 6, 13, 19, 8) повертає 78
// Виклик add(74, 11, 62, 46, 12, 36) повертає 241

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// // Change code below this line
// function add() {
//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

// Change code below this line
function add(...args) {
  let summ = 0;
  for (const key of args) {
    summ += key;
  }
  return summ;
}

console.log(add(15, 27)); //   повертає 42
console.log(add(12, 4, 11, 48)); //   повертає 75
console.log(add(32, 6, 13, 19, 8)); //   повертає 78
console.log(add(74, 11, 62, 46, 12, 36)); //   повертає 241