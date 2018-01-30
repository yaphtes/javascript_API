/*** <<< Флаги >>> ***/

// i - регистр символов игнорируется
// g - проверять все возможные сопоставления в строке
// m - многострочная входная строка рассматривается в виде "нескольких строк"
// u - ...


/*** <<< Что нужно экранировать >>> ***/

// Везде
[ \ ^ $ . | ? * + ( )

// В литералах
/



{  /*** <<< Классы и спецсимволы >>> ***/

	// Любой симол, кроме перевода строки \n,
	// чтобы включить и пробельную строку, используй квантификатор в диапазоне [\s\S]
	/./

	// Цифра
	/\d/

	// Пробельный символ
	/\s/

	// Буква латинского алфавита или цифра или подчеркивание '_'
	/\w/

	// Граница между словами
	/\b/

	// Проверка, обратная /\d/
	/\D/

	// Проверка, обратная /\s/
	/\S/

	// Проверка, обратная /\w/
	/\W/

	// Проверка, обратная /\b/
	/\B/
}



{  /*** <<< Наборы и диапазоны >>> ***/

	// Один любой символ из "набора"
	/[eao]/

	// Один любой символ из диапазона
	/[а-яё]/
	/[a-z]/
	/[0-9]/
	/[А-Я]/
	/[A-Z]/
	/[a-zA-Z0-9]/

	// Один любой символ НЕ из "набора"
	/[^eao]/

	// Один любой символ НЕ из диапазона
	/[^а-яё]/
	/[^a-z]/
	/[^0-9]/
	/[^А-Я]/
	/[^A-Z]/
	/[^a-zA-Z0-9]/

	// P.S.: В наборах и диапазонах не нужно экранирование для следующих символов
	. + ( ) - ^ [
}



{  /*** <<< Квантификаторы >>> ***/

	// Последовательность из 5 цифр
	/\d{5}/

	// Последовательность от 3 до 5 цифр
	/\d{3,5}/

	// Последовательность из трех и более цифр
	/\d{3,}/

	// Одна и более цифр, то же самое, что и /\d{1,}/
	/\d+/

	// Ноль или одна цифра
	/\d?/

	// Ноль и более символов
	/\w*/


	// Примеры:
	/\d+\.\d+/  // десятичное число
	/<\w+>/  // менее точный открывающий html-тэг без атрибутов
	/<[a-z]+>/  // открывыющий html-тэг без атрибутов
	/<\/?[a-z]+>/  // открывающий или закрывающий html-тэг без атрибутов
}



{  /*** <<< Жадные и ленивые квантификаторы >>> ***/
	// Чтобы какой-либо квантификатор стал "ленивым", то нужно
	// добаить знак ? после него, даже для самого знака ?, например так ??
	// Ленивость распространяется только на тот квантификатор, после которого стоит знак ?
	// Ленивый режим без необходимости лишний раз квантификатор не повторит

	// Жадный поиск
	/\.+/

	// Ленивый поиск
	/\.+?/
}



{  /*** <<< Скобочные группы >>> ***/

	// P.S.: Даже если скобочная группа необязательна и не входит в совпадение,
	// соответствующий элемент массива существует (и равен undefined)
	// Пример:
	//
	// var match = 'ack'.match(/a(z)?(c)?/)
	//
	// alert( match.length ); // 3
	// alert( match[0] ); // ac, всё совпадение
	// alert( match[1] ); // undefined, для (z)? ничего нет
	// alert( match[2] ); // c


	// Одна или несколько повтряющихся последовательностей
	/(go)+/

	{  // Содержимое группы

		// Метод match обязательно должен быть без флага g
		let reg = /(.*?)/;
		str.match(reg)  // вернет первое совпадение, а затем скобочную группу


		// Метод exec с флагом g
		let str = '<h1>Привет, мир!</h1>';
		let reg = /(.*?)/g;

		let match;

		while ((match = reg.exec(str)) !== null) {
			// сначала выведет первое совпадение: [<h1>, h1]
 			// затем выведет второе совпадение:   [</h1>, /h1]
			console.log(match);
		}
	}

	{  // Вложенные группы
		let str = '<span class="my">';
		let reg = /<(([a-z]+)\s*([^>]*))>/;

		str.match(reg)  // => [<span class="my">, span class="my", span, class="my"]
	}

	// Исключение из запоминания через ?:

	// Применить квантификатор к группе, но не запоминать ее
	/(?:go)+/
}



{  /*** <<< Обратные ссылки $n, \n >>> ***/

	// Вместо $n подставляется содержимое скобочных групп:
	{  // Группа в строке замены $n
		var name = "Александр Пушкин";
		name = name.replace(/([а-яё]+) ([а-яё]+)/i, "$2, $1");  // - данная операция поменяет слова местами

		alert( name ); // Пушкин, Александр
	}

	{  // Группа в шаблоне \n
		var str = "He said: \"She's the one!\".";
		var reg = /(['"])(.*?)\1/g;

		alert( str.match(reg) ); // "She's the one!"
	}
}



{  /*** <<< Альтернация | >>> ***/
	// Альтернация работает не на уровне символов, как это делает подборка [],
	// а на уровне фраз-выражений A|B

	// Найти или some или stirng
	/some|string/

	// Для задания границ альтернации используются скобочные группы
	/before(xxx|yyy)after/
}



{  /*** <<< Якоря - начало строки ^ и конец $ >>> ***/
	// Знак каретки ^ и доллара $ являются "проверкой" в регулярном выражении,
	// они не соответствуют символу, но проверяют стоит соответствие в начале/конце строки
	// иногда говорят, что они имеют нулевую длину.
	// Якоря чувствительны к флагу m

	// Число которое стоит в начале строки
	/^\d+/

	// Число которое стоит в конце строки
	/\d+$/
}
