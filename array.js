var arr = [1, 'a'];
var str = 'string';

// СВОЙСТВА ЭКЗЕМПЛЯРОВ ОБЪЕКТА Array

// Возвращает длину строки
arr.length  // => number




/*** <<< Array.prototype >>> ***/

// Добавление, удаление элементов массива
{
	// Добавляет один или более элементов в конец
	// массива и возвращает новую длину массива
	Array.prototype.push(newelt: ?)  // => number

	// Метод pop() удаляет последний элемент
	// из массива и возвращает его значение
	Array.prototype.pop()  // => ?

	// Метод unshift() добавляет один или более элементов в
	// начало массива и возвращает новую длину массива
	Array.prototype.unshift(newelt: ?)  // => number

	// Метод shift() удаляет первый элемент
	// из массива ивозвращает его значение
	Array.prototype.shift()  // => ?

	// Метод splice() изменяет содержимое массива, удаляя
	// существующие элементы и/или добавляя новые.
	// Возвращает массив, содержащий удаленные элементы
	Array.prototype.splice(pos: number, amount: number, newelt?: ?)  // => [?]
}

// Разбивает str на массив строк путём разделения строки указанным шаблоном
String.prototype.split(pattern?: string|RegExp, limit?: number)  // => [string]

// Метод join() объединяет все элементы массива в строку.
Array.prototype.join(separator?: string)  // => string

// Метод slice() возвращает поверхностную копию части массива в новый объект массива
Array.prototype.slice(from?: number, to?: number)  // => [?]

// На месте сортирует элементы массива и возвращает отсортированный массив
Array.prototype.sort(compare?: fn(a: ?, b: ?) : number)  // => [?]

// На месте обращает порядок следования элементов массива.
// Первый элемент массива становится последним, а последний — первым
// Возвращает массив
Array.prototype.reverse()  // => [?]

// Метод concat() возвращает новый массив, состоящий из массива,
// на котором он был вызван, соединённого с другими массивами и/или
// значениями, переданными в качестве аргументов
// Возвращает новый массив
Array.prototype.concat(other: [?])  // => [?]

// Возвращает первый индекс, по которому данный элемент
// может быть найден в массиве или -1, если такого индекса нет
Array.prototype.indexOf(elt: ?, from?: number)  // => number

// Возвращает последний индекс, по которому данный элемен
// может быть найден в массиве или -1, если такого индекса нет
Array.prototype.lastIndexOf(elt: ?, from?: number)  // => number

// возвращает массив из собственных перечисляемых свойств переданного
// объекта, в том же порядке, в котором они бы обходились циклом for...in
// (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов)
Object.keys(obj: ?)  // => [string]

// Перебиреющие методы
{
	// Метод forEach() выполняет указанную функцию
	// один раз для каждого элемента в массиве
	Array.prototype.forEach(f: fn(elt: ?, i: number, array: Array), context?: ?)  // => undefined

	// Метод filter() создаёт новый массив со всеми элементами,
	// прошедшими проверку, задаваемую в передаваемой функции
	// Возвращает новый массив
	Array.prototype.filter(test: fn(elt: ?, i: number, array: Array) : bool, context?: ?)  // => [?]

	// Метод map() создаёт новый массив с результатом
	// вызова указанной функции для каждого элемента массива
	Array.prototype.map(f: fn(elt: ?, i: number, array: Array), context?: ?)  // => [?]

	// Проверяет, удовлетворяют ли все элементы
	// массива условию, заданному в передаваемой функции
	Array.prototype.every(test: fn(elt: ?, i: number, array: Array) : bool, context?: ?)  // => boolean

	// Проверяет, удовлетворяет ли хоть какой-нибудь элемент
	// массива условию, заданному в передаваемой функции
	Array.prototype.some(test: fn(elt: ?, i: number, array: Array) : bool, context?: ?)  // => boolean

	// Применяет функцию к аккумулятору и каждому значению
	// массива (слева-направо), сводя его к одному значению
	Array.prototype.reduce(combine: fn(sum: ?, elt: ?, i: number, array: Array), init?: ?)  // => number

	// Применяет функцию к аккумулятору и каждому значению
	// массива (справа-налево), сводя его к одному значению
	Array.prototype.reduceRight(combine: fn(sum: ?, elt: ?, i: number, array: Array), init?: ?)  // => number
}
