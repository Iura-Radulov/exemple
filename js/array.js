
// --------------------Методы массива
// ----------------split() ----  join()-----

// Метод split(delimeter) превращает строку в массив, «разбив» её по разделителю delimeter. 
// Если разделитель это пустая строка, то получится массив отдельных символов.
// Разделителем может быть один или несколько символов.
const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript это интересно";
// console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// ---------------------Метод includes()------------

// includes(value) проверяет есть ли в массиве элемент со значением value и 
// возвращает true или false соответственно.Область применения этого метода сводится к 
// ситуациям когда необходимо проверить есть ли элемент в массиве и не важна его позиция(индекс).

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// ------------Метод slice()-----------

// slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, 
// не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// --------------Метод splice()---------

// Удаление
// Чтобы удалить элементы в массиве, передаются два аргумента.

splice(position, num)
// Метод splice изменяет исходный массив и возвращает массив, содержащий удаленные элементы. 

const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
console.log(deletedScores); // [1, 2, 3]

// Добавление
// Для того чтобы добавить один или несколько элементов в массив,
//  необходимо передать три или более аргумента, при этом второй аргумент должен быть равен нулю.

splice(position, 0, new_element_1, new_element_2, );

// Замена
// Замена это операция добавления в которой удаляются элементы в месте добавления новых. 
// Для этого необходимо передать минимум три аргумента.Количество удаляемых и добавляемых элементов может не совпадать.

splice(position, num, new_element_1, new_element_2, )


// Как быстро очистить массив
const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
fruits.length = 0;
console.log(fruits); // вернет []

// Как объединить более двух массивов
const fruits = ['apple', 'banana', 'orange'];
const meat = ['poultry', 'beef', 'fish'];
const vegetables = ['potato', 'tomato', 'cucumber'];
const food = [...fruits, ...meat, ...vegetables];
console.log(food); // вернет ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]

// Как получить рандомное значение массива
const fruits = [
'banana',
'apple',
'orange',
'watermelon',
'apple',
'orange',
'grape',
'apple',
];
const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
console.log(randomFruit); // вернет рандомный фрукт из массива