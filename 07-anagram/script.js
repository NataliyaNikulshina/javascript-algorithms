/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if(!str1 || !str2 || str1.length !== str2.length || str1.toLowerCase() === str2.toLowerCase()){
        return false;   
    }
    const arr1 = str1.toLowerCase().split('').sort().join('');
    const arr2 = str2.toLowerCase().split('').sort().join('');
    if (arr1 === arr2) {
        return true;
    } else{
        return false;
    };
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('aba', 'ba')); // false
console.log(anagram('up', 'down')); // false
console.log(anagram('up', 'UP')); // true