// нe такий масив видає

// Доповни метод removePotion(potionName) таким чином,
// щоб він видаляв зілля potionName з масиву зілля у властивості potions.

//ТЕСТИ

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив ["Speed potion", Stone skin"]
// Після другого виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив ["Stone skin"]

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     // Change code above this line
//   },
// };

// ------------------ВИКОНАНИЙ КОД ----------------------//

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    let indexOfPotion = this.potions.indexOf(potionName);

    return this.potions.splice(indexOfPotion, 1);
  },
};

console.log(atTheOldToad.potions); //масив ["Speed potion", "Dragon breath", "Stone skin"]

console.log(atTheOldToad.removePotion("Dragon breath")); //  масив ["Speed potion", Stone skin"]
console.log(atTheOldToad.removePotion("Speed potion")); //  масив ["Stone skin"]
