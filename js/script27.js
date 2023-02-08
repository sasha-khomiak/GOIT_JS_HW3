// У змінній scores зберігається масив результатів тестування.
// Використовуючи розподіл і методи Math.max() і Math.min(),
// доповни код таким чином, щоб у змінній bestScore був
// найвищий бал, а у worstScore - найнижчий.

//ТЕСТИ

// Оголошена змінна scores
// Значення змінної scores - це масив [89, 64, 42, 17, 93, 51, 26]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 93
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 17
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

// ------------------ВИКОНАЙТЕ КОД НИЖЧЕ----------------------//

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = scores;
// const worstScore = scores;

// ------------------ВИКОНАНИЙ КОД ----------------------//

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

console.log(bestScore); //93
console.log(worstScore); //17
