// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// а у змінну values - масив всіх значень його властивостей.
// Використовуй методи Object.keys() і Object.values().

//ТЕСТИ

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = apartment;
// const values = apartment;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment); // ["descr", "rating", "price"]
const values = Object.values(apartment); // ["Spacious apartment in the city center", 4, 2153]

console.log(keys);
console.log(values);
