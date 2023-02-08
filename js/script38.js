//Не така відповідь!!!!!!!

// ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ

// Доповни метод addPotion(potionName) таким чином,
// щоб він додавав зілля potionName в кінець масиву зілля
// у властивості potions.

//ТЕСТИ

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// Після другого виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     // Change code above this line
//   },
// };

// ------------------ВИКОНАНИЙ КОД ----------------------//

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    return this.potions.push(potionName);
  },
};

console.log(atTheOldToad.potions);

console.log(atTheOldToad.addPotion("Invisibility")); //   масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
console.log(atTheOldToad.addPotion("Power potion")); // масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]
