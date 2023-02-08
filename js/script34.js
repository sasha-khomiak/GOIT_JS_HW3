// Додай об'єкту bookShelf ще два методи,
// які поки що будуть повертати просто рядки за аналогією
// з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.
// Повертає рядок "Deleting book <назва книги>",
// де < назва книги > - це значення параметра bookName.

// Метод updateBook(oldName, newName)
// буде оновлювати назву книги на нову.Повертає рядок
// "Updating book <стара назва> to <нова назва>",
// де < стара назва > і < нова назва > -
// це значення параметрів oldName і newName відповідно.

//ТЕСТИ

// Оголошена змінна bookShelf
// Значення змінної bookShelf - це об'єкт
// Значення властивості bookShelf.getBooks - це метод об'єкта
// Виклик методу bookShelf.getBooks() повертає рядок "Returning all books"
// Значення властивості bookShelf.addBook - це метод об'єкта
// Виклик методу bookShelf.addBook("Haze") повертає рядок "Adding book Haze"
// Значення властивості bookShelf.removeBook - це метод об'єкта
// Виклик методу bookShelf.removeBook("Red sunset") повертає рядок "Deleting book Red sunset"
// Значення властивості bookShelf.updateBook - це метод об'єкта
// Виклик методу bookShelf.updateBook("Sands of dune", "Dune") повертає рядок "Updating book Sands of dune to Dune"

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
// };

// ------------------ВИКОНАНИЙ КОД ----------------------//

const bookShelf = {
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },

  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
};

console.log(bookShelf.getBooks()); //  повертає рядок "Returning all books"
console.log(bookShelf.addBook("Haze")); //   повертає рядок "Adding book Haze"
console.log(bookShelf.removeBook("Red sunset")); //  повертає рядок "Deleting book Red sunset"
console.log(bookShelf.updateBook("Sands of dune", "Dune")); //  повертає рядок "Updating book Sands of dune to Dune"
