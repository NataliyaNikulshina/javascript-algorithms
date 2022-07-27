/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    str = str.toLowerCase(); //убираем верхний регистр
    const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    const arr = str.split(''); //создаем массив из заданной строки
    let num = 0;
    arr.forEach(function(letter) { 
        if (vowels.includes(letter)){ //ищем каждую гласную в созданном массиве
        num ++;  //если нашли увеличиваем счетчик на 1
}});
    return num; 
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3
console.log(findVowels('здрАвствуй'));
console.log(findVowels('123'));
console.log(findVowels(' '));
console.log(findVowels(''));
