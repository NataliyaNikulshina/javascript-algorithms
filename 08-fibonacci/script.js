/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    const arr = []; //соберем в массив все числа Фибоначчи
    for (let i = 0; i < n; i++){
        if (i==0 || i==1) { //первые числа 0 и 1 переносим в массив
            arr.push(i);
        }
        if (i>1) { //остальные числа>1 вычисляем, суммируя два числа перед ним
        let num = arr[i-2]+arr[i-1];
        arr.push(num);
        }
   }
   return arr[n-1]; //возвращаем n-нное число массива Фибоначчи
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(fibonacci(0));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(5));
console.log(fibonacci(6));