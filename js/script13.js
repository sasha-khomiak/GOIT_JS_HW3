// Перебери об'єкт apartment, використовуючи метод Object.keys()
// і цикл for...of.Запиши у змінну keys масив ключів власних
// властивостей об'єкта apartment, і додай в масив values
// всі значення його властивостей.

//ТЕСТИ

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = apartment;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

console.log(keys); // ["descr", "rating", "price"].
for (const i of keys) {
  values.push(apartment[i]);
}

console.log(values); // ["Spacious apartment in the city center", 4, 2153].
