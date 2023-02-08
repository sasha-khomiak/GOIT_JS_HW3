// ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ

// Напиши функцію calculateTotalPrice(productName),
// яка приймає один параметр productName - назва товару.
// Функція повинна повернути загальну вартість(ціна * кількість)
// товару з таким ім'ям з масиву products.

//ТЕСТИ

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
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

function calculateTotalPrice(productName) {
  // Change code below this line

  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
  // Change code above this line
}

console.log(calculateTotalPrice("Blaster")); // повертає 0
console.log(calculateTotalPrice("Radar")); // повертає 5200
console.log(calculateTotalPrice("Droid")); // повертає 2800
console.log(calculateTotalPrice("Grip")); // повертає 10800
console.log(calculateTotalPrice("Scanner")); // повертає 8100

// ------------------АБО ТАК ----------------------//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let price = 0;
//   for (let product of products) {
//     if (productName === product.name) {
//       price = product.price * product.quantity;
//     }
//   }
//   return price;
//   // Change code above this line
// }
