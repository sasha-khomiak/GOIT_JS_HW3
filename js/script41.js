// ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям,
// але й ціною, а в майбутньому, можливо, й іншими характеристиками.
// Тому зараз у властивості potions буде зберігатися масив об'єктів
// з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином,
// щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля.
// Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт)
// в масив у властивості potions, але тільки, якщо такого зілля
// ще немає в інвентарі.В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName
// з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість
// name об'єкта-зілля з назвою oldName на newName в масиві potions.

//ТЕСТИ

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в масиві potions останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в масиві potions останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), масив potions не змінюється
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не змінюється
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), повертає рядок "Error! Potion Stone skin is already in your inventory!"
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// ------------------ВИКОНАНИЙ КОД ----------------------//

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    let arrPotions = this.potions;
    for (const potion of arrPotions) {
      if (newPotion.name === potion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    let potionIndex = -1;
    let arrPotions = this.potions;
    // console.log(arrPotions);
    for (let i = 0; i < arrPotions.length; i += 1) {
      if (arrPotions[i].name === potionName) {
        potionIndex = i;
      }
    }
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    } else {
      this.potions.splice(potionIndex, 1);
    }
  },

  updatePotionName(oldName, newName) {
    let potionIndex = -1;

    let arrPotions = this.potions;
    for (let i = 0; i < arrPotions.length; i += 1) {
      if (arrPotions[i].name === oldName) {
        potionIndex = i;
      }
    }

    let itemPrice = arrPotions[potionIndex].price;

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    } else {
      this.potions.splice(potionIndex, 1, {
        name: newName,
        price: itemPrice,
      });
    }
  },
};

//ТЕСТИ

// 1
// console.log(atTheOldToad.getPotions());
//  повертає [ { name: "Speed potion", price: 460 },
// { name: "Dragon breath", price: 780 },
//{ name: "Stone skin", price: 520 } ]

// 2
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
//  в масиві potions останнім елементом буде цей об'єкт

// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
//  в масиві potions останнім елементом буде цей об'єкт

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
//  масив potions не змінюється
// повертає рядок "Error! Potion Dragon breath is already in your inventory!"

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
//  массив potions не змінюється
//  повертає рядок "Error! Potion Stone skin is already in your inventory!"

// 3

// console.log(atTheOldToad.removePotion("Dragon breath"));
//  буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]

// console.log(atTheOldToad.removePotion("Speed potion"));
//  буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

//4

// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// ------------------НАЙКРАЩИЙ КОД ----------------------//

// const atTheOldToad = {
//  potions: [
//   { name: 'Speed potion', price: 460 },
//   { name: 'Dragon breath', price: 780 },
//   { name: 'Stone skin', price: 520 },
//  ],
//  // Change code below this line
//  getPotions() {
//   return this.potions;
//  },
//  addPotion(newPotion) {
//   for (const potion of this.potions) {
//    if (potion.name === newPotion.name) {
//     return Error! Potion ${newPotion.name} is already in your inventory!;
//    }
//   }
//   this.potions.push(newPotion);
//  },
//  removePotion(potionName) {
//   for (let i = 0; i < this.potions.length; i++) {
//    if (potionName === this.potions[i].name) {
//     return this.potions.splice(i, 1);
//    }
//   }
//   return Potion ${potionName} is not in inventory!;
//  },
//  updatePotionName(oldName, newName) {
//   for (let i = 0; i < this.potions.length; i++) {
//    if (oldName === this.potions[i].name) {
//     return (this.potions[i].name = newName);
//    }
//   }
//   return Potion ${oldName} is not in inventory!;
//  },
//  // Change code above this line
// };
