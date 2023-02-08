// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon
// однією операцією деструктуризації властивостей об'єкта highTemperatures.
// Задай значення за замовчуванням для highIcon -
// рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

//ТЕСТИ

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highYesterday
// Значення змінної highYesterday - це число 28
// Оголошена змінна highToday
// Значення змінної highToday - це число 26
// Оголошена змінна highTomorrow
// Значення змінної highTomorrow - це число 33
// Оголошена змінна highIcon
// Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується деструктуризація об'єкта

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

console.log("highYesterday: ", highYesterday); //28
console.log("highToday: ", highToday); //26
console.log("highTomorrow: ", highTomorrow); //33
console.log("meanTemperature: ", meanTemperature); //29
console.log("highIcon: ", highIcon); // рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
