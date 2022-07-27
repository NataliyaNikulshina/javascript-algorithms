/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    str = str.replace(/\s+/g, ' '); //удаляем двойные пробелы из строки
    const arr = str.split(' '); //делаем массив из слов
    //console.log(arr);
    const arrUp = arr.map(function(strUp){
        if (!(strUp === '')){ //если элемент массива не пуста строка, первый элемент слова преобразовываем в верхний регистр
        strUp = strUp[0].toUpperCase() + strUp.slice(1);
        return strUp;}
    });

    return arrUp.join(' '); //выводим массив, преобразовав в строку
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('лето снаружи. лето внутри.'));
console.log(capitalize('одно и то же в разном возрасте видится по-разному'));
console.log(capitalize('Самой крупной рыбой в реке становится та, что не клюет на приманку'));
console.log(capitalize('молодость  всё  простит'));
console.log(capitalize(' '));
console.log(capitalize('слово '));
console.log(capitalize(''));