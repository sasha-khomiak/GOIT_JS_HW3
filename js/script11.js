// Виконай рефакторинг рішення попереднього завдання,
// додавши в цикл for...in перевірку на власну властивість.

//ТЕСТИ

// Оголошена змінна advert.
// Значення змінної advert - це об'єкт.
// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line

  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }

  // Change code above this line
}

console.log(keys); // ["descr", "rating", "price"]
console.log(values); // ["Spacious apartment in the city center", 4, 2153].
