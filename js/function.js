// Объявление функции (function declaration)
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// Функциональное выражение (function expression)
// const multiply = function (x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// };

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// ------Метод forEach -------------

// массив.forEach(function callback(element, index, array) {
//   // Тело коллбек-функции
// });

// Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd1 = (a, b, c) => {
  return a + b + c;
};

const arrowAdd2 = (a, b, c) => a + b + c;


// const numbers = [5, 10, 15, 20, 25];

// Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

