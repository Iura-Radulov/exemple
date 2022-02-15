// Тип данных Symbol

// Создаём символ id с описанием (именем) "id"
// let id = Symbol("id");
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	[id]: "Некое значение"
// };
// console.log(userInfo);

// Основное применение символов:
// 1.«Скрытые» свойства объектов
//		Символьное свойство не появится в for..in
// 2. Использование системных символов
// 	Symbol.iterator, Symbol.toPrimitive и т.д.

// Дублирование объектов (Object.assign)

// Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);
/*
let userInfo = {
	name: "Вася",
	age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);
console.log(user);
*/
//-------------------
/*
// Еще про Object.assign

let userInfo = {
	name: "Вася",
	age: 30,
}
Object.assign(userInfo, { ['likes javascript']: true, city: "Uzhhorod" });
console.log(userInfo);
*/
//--------------------
// Оператор "in"
/*
let userInfo = {
	//name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}
if ("name" in userInfo) {
	console.log(userInfo.name);
}
*/
//--------------------

//В большинстве случаев сработает сравнение с undefined.
//либо опциональная цепочка ?.
//Но есть особый случай, когда свойство существует, 
//но содержит значение undefined. 
//В этом случае необходимо использовать "in".

/*
let userInfo = {
	name: undefined,
	// ...следующие свойства
}
if (userInfo.name) { // false
	console.log(userInfo.name);
}
if ("name" in userInfo) { //true
	console.log(userInfo.name);
}
*/

//---------------------------------------------

// Цикл «for…in»
/*
// Для перебора всех свойств объекта используется цикл for..in.
// Этот цикл отличается от изученного ранее цикла for(;;).

for (let key in object) {
	// тело цикла выполняется для каждого свойства объекта
}
*/

//-----------

/*
let userInfo = {
	name: "Вася",
	age: 30,
	address: {
		city: "Uzhhorod",
		street: "Freedom",
	}
}

for (let key in userInfo) {
	// ключи
	console.log(key); // name, age, address
	// значения ключей
	console.log(userInfo[key]); // Вася, 30, Object {}
}

for (let key in userInfo.address) {
	// ключи
	console.log(key); // city, street
	// значения ключей
	console.log(userInfo.address[key]); // Uzhhorod, Freedom
}*/

//---------------------------------------------

// Функция-конструктор

/*
Обычный синтаксис создания объекта{... } позволяет создать
только один объект. Но зачастую нам нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new".
*/
/*
Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи
	оператора "new".
*/
/*
function UserInfo(name) {

	// this = {}; Создается пустой объект (неявно)

	this.name = name;
	this.age = 30;

	// return this; Возвращается объект (неявно)
}

console.log(new UserInfo('Вася'));
console.log(new UserInfo('Лена'));
*/
// --------------Метод Object.keys()
// --------------Метод Object.values()
// --------------Метод Object.entries()
/*
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]
*/

