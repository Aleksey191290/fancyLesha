Для подключения библиотеки:
1) скопируйте папку fancyLesha в ваш проект
2) Подключите файл стилей (/css/style.css)
3) Подключите скрипт библиотеки (/js/fancyLesha.js)

Использование:
Добавить к ссылке (тег <a>) класс "fancyLesha" и атрибут rel="group", 
где "group" - это произвольное название галереи.
Все ссылки с одинаковым значением атрибута rel попадут в одну галерею.

Пример: создание двух независимых галерей в первой две картинки, во второй - три

'a href="path_to_pic" class="fancyLesha" rel="group">ссылка на открытие картинки/a>'

'a href="path_to_pic" class="fancyLesha" rel="group">ссылка на открытие картинки/a>'

'a href="path_to_pic" class="fancyLesha" rel="group1">ссылка на открытие картинки/a>'

'a href="path_to_pic" class="fancyLesha" rel="group1">ссылка на открытие картинки/a>'

'a href="path_to_pic" class="fancyLesha" rel="group1">ссылка на открытие картинки/a>'
