// Открывает окно с указанным url
window.open(url, target, features, replace)  // => ссылка на новое окно либо null, если было заблокировано
// Всплывающее окно блокируется в том случае, если вызов window.open произошёл не в результате действия посетителя.
target // - имя нового окна, если с тем же именем, текущее окно заменяется
features: // - опции
    // расположение окна
    left/top (число) // - координаты верхнего левого угла относительно экрана. Ограничение: новое окно не может быть позиционированно за пределами экрана
    width/height (число) // - Ширина/высота нового окна. Минимальные значения ограничены, так что невозможно создать невидимое окно с нулевыми размерами.    
                         //   Если координаты и размеры не указаны, то обычно браузер открывает не окно, а новую вкладку.
    // свойства окна
    menubar (yes/no) // - Скрыть или показать строку меню браузера.
    location (yes/no) // - Показать/скрыть поле URL-адреса в новом окне. По умолчанию Firefox и IE не позволяют скрывать строку адреса.
    status (yes/no) // - Показать или скрыть строку состояния. С другой стороны, браузер может в принудительном порядке показать строку состояния.
    resizable (yes/no) // - Позволяет отключить возможность изменять размеры нового окна. Значение no обычно неудобно посетителям.
    scrollbars (yes/no) // - Разрешает убрать полосы прокрутки для нового окна. Значение no обычно неудобно посетителям
    
    // PS.:
    // * Браузер подходит к этим параметрам интеллектуально. Он может проигнорировать их часть или даже все, они скорее являются «пожеланиями», нежели «требованиями».
    // * Если при вызове open указан только первый параметр, параметр отсутствует, то используются параметры по умолчанию. Обычно при этом будет открыто не окно, а вкладка, что зачастую более удобно.
    // * Если указана строка с параметрами, но некоторые yes/no параметры отсутствуют, то браузер выставляет их в no. Поэтому убедитесь, что все нужные вам параметры выставлены в yes.
    // * Когда не указан top/left, то браузер откроет окно с небольшим смещением относительно левого верхнего угла последнего открытого окна.
    // * Если не указаны width/height, новое окно будет такого же размера, как последнее открытое.

// открытую страницу можно как угодно модифицировать, связь двусторонняя (тут работает Same Origin Policy (SOP))
const childWindow = window.open();
const parentWindow = childWindow.opener;


// События

onresize // – событие изменения размера окна.
onscroll // – событие при прокрутке окна.
onload // – полностью загрузилась страница со всеми ресурсами.
onfocus/onblur // – получение/потеря фокуса.


// Методы и свойства

window.closed // - равно true, если окно закрыто. Может быть использовано, чтобы проверить, закрыл ли посетитель попап.
window.close() // - Закрывает попап без предупреждений и уведомлений. Вообще, метод close() можно вызвать для любого окна,
               //   в том числе, текущего. Но если окно открыто не с помощью window.open(), то браузер может проигнорировать
               //   вызов close или запросить подтверждение.


// Перемещение и изменение размеров окна

win.moveBy(x,y) // - Перемещает окно относительно текущего положения на x пикселей вправо и y пикселей вниз. Допускаются отрицательные значения.
win.moveTo(x,y) // - Передвигает окно в заданную координатами x и y точку экрана монитора.
win.resizeBy(width,height) // - Изменяет размер окна на заданную величину width/height (ширина/высота). Допускаются отрицательные значения.
win.resizeTo(width,height) // - Изменяет размер окна на заданное значение

// PS.:
// * Чтобы предотвратить использование этих методов с плохими целями, браузеры часто блокируют их выполнение. Как правило, они работают,
//   если окно win открыто вызовом window.open из JavaScript текущей страницы и в нём нет дополнительных вкладок.
// * Заметим, что JavaScript не может ни свернуть ни развернуть ни «максимизировать» (Windows) окно.
//   Эти функции операционной системы от Frontend-разработчиков скрыты. Вызовы, описанные выше, в случае свёрнутого или максимизированного окна не работают.


// Прокрутка окна
win.scrollBy(x,y) // - Прокрутка окна на заданное число пикселей вперед или назад. Допускаются отрицательные значения
win.scrollTo(x,y) // - Прокручивает окно к заданным координатам.
elem.scrollIntoView(top) // - Этот метод прокрутки вызывается на элементе. При этом окно прокручивается так, чтобы элемент был полностью видим.
                         //   Если параметр top равен true или не задан, то верх элемента совпадает с верхом окна. Если он равен false, то окно
                         //   прокручивается так, чтобы нижний край элемента совпал с нижним краем окна


// PSS.:
// Всплывающее окно открывается с помощью вызова window.open(url, name, params).
// Метод window.open возвращает ссылку на новое окно или null, если окно было заблокировано.
// Современные браузеры блокируют окна, если window.open вызвано не в результате действия посетителя.
// Обычно открывается вкладка, но если заданы размеры и позиция – то именно окно.
// Новое окно имеет ссылку на родительское в window.opener.
// Окна могут общаться между собой как угодно, если они из одного источника. Иначе действуют жёсткие ограничения безопасности.


// Общение между окнами и фреймами
// Из текущего Window:
const win = frames[0].contentWindow;
const win = window.open();

// Отправляет data в win, сверяя домен с targetOrigin, targetOrigin может быть '*'
win.postMessage(data, targetOrigin);

// В окне получателе:
self.onmessage = message => { }