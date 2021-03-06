// *** Методы для работы с массивами в JS ***

arr.forEach(function (item, index) {
  //проходит циклом по всему массиву и выполняет ф-цию для каждого элемента
});

arr.map(function (item, index, array) {
  //возвращает новый массив и применяет к каждому элементу функцию
});

arr.filter(function (item, index, array) {
  //возвращает новый массив из тех элементов, для которых условие в теле ф-ции верно (true)
});

arr.sort(function (a, b) {
  //изменяет массив, сортируя его если без функции то лексиметрически
  return a - b; // если хотим сравнить числа то надо передавать два числа (пример по возрастанию)
  return b - a; // если хотим сравнить числа то надо передавать два числа (пример по убыванию)
});

arr.reduce(function (accumulator, item, index, array) {
  // также проходит по всему массиву как forEach
  // только может принимать в себя аккумулятор - defaultAccumulator
  // аккумулятор может быть чем угодно, например строкой или другим массивом или объектом или переменной
}, defaultAccumulator);
