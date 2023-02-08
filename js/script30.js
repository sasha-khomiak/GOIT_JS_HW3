// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання,
// не змінюючи напряму параметр data.У новому об'єкті повинна бути
// властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві,
// category і priority, можуть бути відсутніми.Тоді, в новому об'єкті завдання,
// у властивостях category і priority повинні бути значення за замовчуванням,
// що зберігаються в однойменних локальних змінних.

//ТЕСТИ

// Оголошена функція makeTask(data)
// Виклик makeTask({}) повертає { category: "General", priority: "Normal", completed: false }
// Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// Виклик makeTask({ category: "Finance", text: "Take interest" }) повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// Виклик makeTask({ priority: "Low", text: "Choose shampoo" }) повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// Виклик makeTask({ text: "Buy bread" }) повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   // Change code above this line
// }

// ------------------ВИКОНАНИЙ КОД ----------------------//

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line

  return { completed, category, priority, ...data };
  // Change code above this line
}

console.log(makeTask({})); //повертає { category: "General", priority: "Normal", completed: false }
console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
); // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
console.log(
  makeTask({
    category: "Finance",
    text: "Take interest",
  })
); //   повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
console.log(
  makeTask({
    priority: "Low",
    text: "Choose shampoo",
  })
); //   повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
console.log(
  makeTask({
    text: "Buy bread",
  })
); // повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// ------------------АБО ТАК ----------------------//

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   let newObj = { completed, category, priority };

//   let answer = { ...newObj, ...data };
//   return answer;
//   // Change code above this line
// }

// console.log(makeTask({}));

// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
