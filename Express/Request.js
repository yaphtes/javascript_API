// Properties

// Объекты содержащие значения куки-файлов, передаваемые от клиента.
req.cookies / req.signedCookies

// Ссылка на экземпляр приложения
req.app

// Массив, содержащий именованные параметры маршрутизации
req.params

// Объект, содержащий параметры строки запроса (иногда называемые GET-параметрами)
// в виде пар "имя/значение".
req.query

// Объект, содержащий параметры POST запроса.
// Нужно промежуточное ПО, которое позволит сделать синтаксический разбор содержимого тела.
// Например плагин body-parser.
req.body

// Информация о текущем совпавшем маршруте. Полезна, главным образом для отлкдки маршрутизации.
req.route

// Значения сеансовых переменных. Например как только мы настроили express-session модуль
// req.session выполняет и чтение и задание значения, т.к. у объекта ответа нет свойства session
req.session

// Объекты содержащие значения куки-файлов, передаваемые от лкиента.
req.cookies / req.signedCookies

// Заголовки запроса, полученные от клиента
req.headers

// IP-адрес клиента
req.ip

// Массив IP-адресов, бывает нужным при работе с прокси-серверами
req.ips

// Путь запроса (без протокола, хоста, порта или строки запроса)
req.path

// Удобный метод, возвращающий переданное клиентом имя хоста. Эта информация
// может быть подделана и не должна использоваться из соображений безопасности.
req.host

// Удобное свойство, возвращающее true, если запрос порожден вызовом AJAX
req.xhr

// Протокол, использованный при совершении данного запроса. (напр http или https)
req.prototcol

// Удобное свойство, возвращающее true, если соединение является безопасным.
// Эквивалентно req.prototcol === 'https'
req.secure

// Небольшая неточность в наименовании - эти свойства возвращают путь и строку
// запроса (напр, '/about?foo=bar'). req.url может быть изменен для нужд внутренней маршрутизации, но req.originalUrl
// разработан так, чтобы всегда хранить исходный путь и строку запроса.
req.url/req.originalUrl/req.baseUrl/req.path

// Удобный метод, возвращающий массив (естественных) языков, которые предпочтительны клиенту.
// Эта информация получается путем анализа заголовка запроса.
req.acceptedLenguages

// Проверяет, является ли запрос "свежим", используется для работы с кешированием.
// подробнее: http://expressjs.com/ru/4x/api.html#req.fresh
req.fresh

// Значение, обратное значению req.fresh
req.stale

// Геттер, возвращает метод, используемый при запросе на сервер
req.method

// массив, содержащий строки сабдоменов, для сабдоменов используется пакет vhost
req.subdomains



// Methods

// Устанавливает атрибуты (options) в куки-файл с именем name
res.cookie(name, value, [options])

// Возвращает именованный параметр маршрутизации или параметры GET/POST.
// Рекомундуется избегать использованиеэ того метода.
req.param(name)

// Возвращает значение заголовка объекта запроса, например req.get('Content-Type')
req.get(field)

// Проверяет, соответствует ли заголовок 'Content-Type' объекта запроса указанному
// в аргументе функции типу MIME например: req.is('application/json');
req.is(type)


// Удобный метод для принятия решения о том, должен ли клиент принимать
// данный тип или типа (необязательный параметр types может быть одиночным
// типом MIME, например application/json, Разделенным зазпятыми
// списком или массивом). Этот метод обычно интересен тем, кто пишет публичные API;
// он предполагает, что браузеры всегда по умолчанию принимает HTML.
req.accepts([types])

// Другие полезные подобные методы
req.acceptsCharsets(charset [, ...])
req.acceptsEncodings(encoding [, ...])
req.acceptsLanguages(lang [, ...])