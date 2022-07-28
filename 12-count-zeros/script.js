/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
    const res = [];
    let count = 0;
      for (let i=2; i<=n; i++){
        if (i.toString().includes('0')) {
           res.push(i); //нашли все числа, в которых есть '0' и записали в массив
        };
    }
    const arr = res.join('').split(''); //создали строку из массива и массив из строки, где элемент одна цифра
    for (let i = 0; i < arr.length; i++){
      if (arr [i] == 0) {
        count++; // посчитали количество элементов равных 0
      } 
    }
  return count; 
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log(countZeros(9)); //0
console.log(countZeros(10)); //1
console.log(countZeros(342)); //64