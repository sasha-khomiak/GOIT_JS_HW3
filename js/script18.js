// ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ

// Напиши функцію getProductPrice(productName),
//     яка приймає один параметр productName - назва продукту.
//     Функція шукає об'єкт продукту з таким ім'ям(властивість name)
//     в масиві products і повертає його ціну(властивість price).
//     Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

//ТЕСТИ

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

  for (const i of products) {
    if (productName === i.name) {
      return i.price;
    }
  }
  return null;
  // Change code above this line
}

console.log(getProductPrice("Radar")); // повертає 1300.
console.log(getProductPrice("Grip")); // повертає 1200.
console.log(getProductPrice("Scanner")); // повертає 2700.
console.log(getProductPrice("Droid")); //  повертає 400.
console.log(getProductPrice("Engine")); // повертає null.
