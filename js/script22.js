// У прогнозі максимальних температур також може бути необов'язкова властивість
// icon - іконка погоди.Заміни оголошення змінних yesterday, today, tomorrow
// і icon однією операцією деструктуризації властивостей об'єкта highTemperatures.
// Задай значення за замовчуванням для icon -
// рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

//ТЕСТИ

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна icon за допомогою деструктуризації
// Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Використовується деструктуризація об'єкта

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

console.log("yesterday: ", yesterday); //28
console.log("today: ", today); //26
console.log("tomorrow: ", tomorrow); //33
console.log("meanTemperature: ", meanTemperature); //29
console.log("icon: ", icon); // рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
