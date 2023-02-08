// Виконай рефакторинг функції countProps(object),
// використовуючи метод Object.keys() і,
// можливо, але не обов'язково, цикл for...of.

//ТЕСТИ

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  let keys = Object.keys(object);

  propCount = keys.length;

  return propCount;
  // Change code above this line
}

console.log(countProps({})); //повертає 0
console.log(countProps({ name: "Mango", age: 2 })); // повертає 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // повертає 3
