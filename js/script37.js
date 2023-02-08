// ЗАДАЧА. ОТРИМУЄМО ВСЕ ЗІЛЛЯ

// Додай об'єкту atTheOldToad метод getPotions(),
// який просто повертає значення властивості potions.

//ТЕСТИ

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає ["Speed potion", "Dragon breath", "Stone skin"]

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line

//   // Change code above this line
// };

// ------------------ВИКОНАНИЙ КОД ----------------------//

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};

console.log(atTheOldToad.potions); //  це масив ["Speed potion", "Dragon breath", "Stone skin"]
console.log(atTheOldToad.getPotions()); //повертає ["Speed potion", "Dragon breath", "Stone skin"]
