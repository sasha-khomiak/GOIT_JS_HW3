// ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ

// Напиши функцію getAllPropValues(propName),
// яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив всіх значень властивості з
// таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям,
// функція повинна повернути порожній масив.

//ТЕСТИ

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
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

function getAllPropValues(propName) {
  let arr = [];

  if (Object.keys(products[0]).includes(propName)) {
    for (const i of products) {
      arr.push(i[propName]);
    }
    return arr;
  }
  return arr;
}

console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")); // []

// ------------------АБО ОТАК----------------------//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// let val = [];

// for (let product of products){
//   let prodArr = Object.keys(product);
//   for(let key of prodArr){
//     if(key ===propName)
//     {  val.push(product[key]);}
//   }
// }

// return val;
//   // Change code above this line
// }
