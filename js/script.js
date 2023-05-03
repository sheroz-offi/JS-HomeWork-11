/* //! ЗАДАНИЕ 1
/*  
 1. Объявите переменную и присвойте ей стрелочную функцию
 2. У функции не должно быть параметров
 3. Явно верните из функции строку "Привет, мир!"
 4. Вызовите функцию и выведите результат в консоль 
*/
console.log("! ЗАДАНИЕ 1");

let funA = () => {
  console.log("Привет Рома");
};

funA();

//! Задание 2
/* 
1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
2. Используйте стрелочную функцию
*/
console.log("! ЗАДАНИЕ 2");

let funB = () => {
  console.log("Привет Далер (задание 2)");
};

setInterval(funB, 5000);

//! Задание 3
/*
 1. Что будет выведено в консоль?
 Постарайтесь ответить без запуска кода.
 2. Нужно ли как-то исправить этот код?
*/
console.log("! ЗАДАНИЕ 3");

setTimeout(function myFn() {
  console.log("Привет из функции myFn (задание 3)");
}, 2000);

//myFn();

console.log("Наверно да честно я не смотрел");

//! Задание 4
/*
 1. Создайте массив с 3 объектами "cars"
 2. Каждый объект должен иметь три свойства
  - carBrand (строка)
  - price (число)
  - isAvailableForSale (логическое значение)
 3. Добавьте еще один объект в массив
 4. Выведите результирующий массив в консоль
 5 новый объект должен вноситься через функцию
 */
console.log("! ЗАДАНИЕ 4");

let cars = [
  {
    carBrand: "Bmw",
    price: 12000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Ford",
    price: 20000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Mercedes",
    price: 30000,
    isAvailableForSale: true,
  },
];

let CarName = "Gentra";
let CarPrice = 20000;
let CarBool = true;

function funC(CarName, CarPrice, CarBool) {
  let NewCarObj = {
    carBrand: CarName,
    price: CarPrice,
    isAvailableForSale: CarBool,
  };
  cars.push(NewCarObj);

  console.log(NewCarObj);
}

funC(CarName, CarPrice, CarBool);

console.log(cars);

//! Задание 5
/*
 1. Cгенерируйте новое 4-значное случайное число.
 Диапазон для случайного числа 1000 - 9999.
 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 ВАЖНО: В решении задачи используйте функции:
  - для генерации случайного числа в заданном диапазоне
  - для добавления случайного числа в массив с возвратом измененного массива
*/
console.log("! ЗАДАНИЕ 5");

const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

//! Задание 6
/*
 1. Создайте функцию "cityInfo" с двумя параметрами,
 которая возвращает строку
 "London is at the index 0 in the myCities array"
 2. Переберите все элементы массива "myCities",
 для каждого элемента вызовите функцию "cityInfo"
 и выведите в консоль результат вызова функции
 */
console.log("! ЗАДАНИЕ 6");

const myCities = ["London", "New York", "Singapore"];

function cityInfo(a, b) {
  return `London is at the index in the myCities array`;
}

cityInfo();

//! Задание 7
/*
 1. Создайте функцию "findPostById" с двумя параметрами:
 - ID поста
 - массив постов
 2. Функция должна вернуть пост с определенным ID
 3. Если поста с определенным ID в массиве постов нет,
 функция должна вернуть "undefined"
 4. Также внутри функции выведите в консоль ID поста
*/
console.log("! ЗАДАНИЕ 7");

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
];

console.log(findPostById(6134, posts)); // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)); // undefined

/* function findPostById(id, posts) {
    return posts.find((post) => post.postId === id);
};

findPostById();
 */

//! Задание 8
/*
 1. Создайте функцию "createGreeting", внутри которой создайте:
  - переменную "greetingString" с значением "Hey, this is"
    (объявите ее используя "let")
  - функцию "greet" с одним параметром, которая должна возвращать
    строку-приветствие на основании "greetingString" и параметра,
    например, "Hey, this is Bob"
  - функцию "changeGreeting" с одним параметром, которая должна
    изменять значение переменной "greetingString"
 2. Функция "createGreeting" должа вернуть объект с двумя методами:
  - greet
  - changeGreeting
*/
console.log("! ЗАДАНИЕ 8");

const greeting1 = createGreeting();
//?console.log(greeting1.greet("Bob"));
// Hey, this is Bob

greeting1.changeGreeting("Good Morning from");
//?console.log(greeting1.greet("Emily"));
// Good Morning from Emily

const greeting2 = createGreeting();
//?console.log(greeting2.greet("Emily"));
// Hey, this is Emily


function createGreeting() {
    let greetingString = "Hey, this is ";
};