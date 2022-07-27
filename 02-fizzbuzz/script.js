/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    for (let i = 0; i <= num-1; i++) {
        const numer = i+1; 
        if(numer % 3 === 0 && numer % 5 === 0){
            console.log('fizzbuzz'); 
        } else if (numer % 5 === 0){
            console.log('buzz');
        } else if (numer % 3 === 0){
            console.log('fizz');
        } else {
            console.log(numer); //выводим числа, если ни одно из условий выше не сработали
        }
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:
fizzBuzz(15);
