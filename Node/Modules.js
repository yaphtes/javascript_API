// Возвращает итоговое местонахождение загружаемого модуля
require.resolve('module');

// "Раскешировать" загруженный модуль
delete require('module');