// console неявно использует util.format() и util.inspect()
// console - глобальная переменная

// Выводит текст в стандартный поток вывода
console.log(text: ?)

// Выводит в поток ошибок
console.error(text: ?)

// Выводит текущий стек трейс в поток ошибок
console.trace()

// У лубой прграммы есть как минимум 2 потока: 1 - нормальный поток выполнения, 2 - поток ошибок
// перенаправление вывода:

// записывает обычный вывод в ok, а ошибки в err
// node console.js 1>ok 2>err
