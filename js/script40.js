// нe такий масив видає

// Доповни метод updatePotionName(oldName, newName) таким чином,
// щоб він оновлював назву зілля з oldName на newName
// в масиві зілля у властивості potions.

//ТЕСТИ

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
// Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     // Change code above this line
//   },
// };

// ------------------ВИКОНАНИЙ КОД ----------------------//

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    let indexOfPotion = this.potions.indexOf(oldName);
    return this.potions.splice(indexOfPotion, 1, newName);
  },
};

console.log(atTheOldToad.potions); //  масив ["Speed potion", "Dragon breath", "Stone skin"]
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); //  масив ["Speed potion", "Polymorth", "Stone skin"]
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility")); //  масив ["Speed potion", "Polymorth", "Invisibility"]
