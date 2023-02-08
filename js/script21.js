// Надійшов триденний прогноз максимальних температур
// і ми рахуємо середню температуру за три дні(meanTemperature).
// Заміни оголошення змінних yesterday, today і tomorrow
// однією операцією деструктуризації властивостей об'єкта highTemperatures.

//ТЕСТИ

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна meanTemperature
// Значення змінної meanTemperature - це число 29
// Використовується синтаксис деструктуризації об'єкта highTemperatures

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

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday, today, tomorrow } = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

//ТЕСТИ

console.log("yesterday: ", yesterday); //28
console.log("today: ", today); //26
console.log("tomorrow: ", tomorrow); //33
console.log("meanTemperature: ", meanTemperature); //29
