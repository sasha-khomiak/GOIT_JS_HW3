// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості
// name, price, image і tags зі значеннями зі змінних з аналогічними іменами.
// Обов'язково використовуй синтаксис коротких властивостей.

//ТЕСТИ

// Оголошена змінна product
// Значення змінної product - це об'єкт
// Значення вкладеної властивості name - це рядок "Repair Droid"
// Значення вкладеної властивості price - це число 2500
// Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// Значення вкладеної властивості tags - це масив ["on sale", "trending", "best buy"]

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   // Change code above this line
// };

// ------------------ВИКОНАНИЙ КОД ----------------------//

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags,
  // Change code above this line
};

console.log(product.name); // "Repair Droid"
console.log(product.price); // 2500
console.log(product.image); // "https://via.placeholder.com/640x480"
console.log(product.tags); // ["on sale", "trending", "best buy"]
