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
    const arr = [];
    for (let i = 0; i < n; i ++){
        let num;
        if (i==0 || i==1) {
            num=i;
            arr.push(num);
        }
        if (i>1) {
        num = arr[i-2]+arr[i-1];
        arr.push(num);
        }
   }
   return arr[n-1];
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(fibonacci(0));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(5));
console.log(fibonacci(6));