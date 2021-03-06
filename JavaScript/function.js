/*** <<< Function.prototype >>> ***/

// Метод call() вызывает функцию с указанным
// значением this и индивидуально предоставленными аргументами.
Function.prototype.call(this: ?, args?: ?)

// Метод apply() вызывает функцию с указанным
// значением this и аргументами, предоставленными в
// виде массива (либо массивоподобного объекта).
Function.prototype.apply(this: ?, args: [?])

// Метод bind() создаёт новую функцию, которая при вызове устанавливает
// в качестве контекста выполнения this предоставленное значение. В метод
// также передаётся набор аргументов, которые будут установлены перед
// переданными в привязанную функцию аргументами при её вызове.
// Возвращает функцию-обертку
Function.prototype.bind(this: ?, args?: ?)  // => {function}

// Возвращает имя функции
Function.prototype.name  // => string

// Определяет количество аргументов,
// ожидаемых функцией.
Function.prototype.length  // => number



/*** <<< Прочие возможности >>> ***/

// Свойство new.target позволяет определить была ли функция или конструктор
// вызваны с помощью оператора new.В конструкторах и функциях инстанциированных
// с помощью оператора new,  new.target возвращает ссылку на конструктор или функцию.
// При обычном вызове функции new.target имеет значение undefined.
new.target

// В области видимости функции - псевдомассив аргументов функции
// В старом стандарте arguments и переменные-параметры ссылаются на одни и те же значения.
// В современной редакции стандарта это поведение изменено.
// Аргументы отделены от локальных переменных
arguments