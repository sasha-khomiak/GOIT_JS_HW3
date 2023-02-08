// !!!!! НЕ ТОЙ РЕЗУЛЬТАТ В КОНСОЛІ

// Доповни метод updateBook(oldName, newName) таким чином,
// щоб він змінював назву книги з oldName на newName у властивості books.
// Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
// і splice() для того, щоб замінити цей елемент.

//ТЕСТИ

// Оголошена змінна bookShelf
// Значення змінної bookShelf - це об'єкт
// Значення властивості bookShelf.updateBook - це метод об'єкта
// Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"), значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     // Change code above this line
//   },
// };

// ------------------ВИКОНАНИЙ КОД ----------------------//

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    let indexOfBook = this.books.indexOf(oldName);

    return this.books.splice(indexOfBook, 1, newName);
  },
};

console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); // значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
console.log(bookShelf.updateBook("The last kingdom", "Dune")); // значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]
