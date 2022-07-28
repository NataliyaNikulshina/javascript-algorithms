/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    const arr = [];
        arr1.every(function(num) { //проверяем каждый елемент в массиве
            const search = arr2.includes(num); //проверка: есть ли эл-т из второго массива в первом
            if (search){ //если есть, то записываем его в итоговый массив
            arr.push(num);
            }
            return true;                
        });
        const array = arr.filter((num, index) => { //фильтриуем итоговый массив, чтобы в нем остались только уникальные числа
            return index === arr.indexOf(num);
          });
        return array;
        
    }


// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
//console.log(intersection([1, 5, 4, 2], [7, 12])); // []
//console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3])); //[1,4]