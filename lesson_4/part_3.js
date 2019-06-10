function func4 (arr) {
    let res = -Infinity, sum = 0;
    for ( let i = 0; i < arr.length; i+=1) {
            sum += arr[i];
            if (arr[i] > sum) sum = arr[i];
            res = Math.max(res, sum);
                
    }
    return res;
}

function func5 (arr, res = []) {
    for (let i=0; i<arr.length; i+=1) {
        if (Array.isArray(arr[i])) {
            func5 (arr[i], res);
        }
        else {
            res.push (arr[i]);
        }
    }
    return res;
}



 const add = (a) => {
     return function (b) {
         if (a == 2 && b == 5) {
             return function (c) {
                 return a+b+c;
             };
         }
         else return a+b;
     }
 } 
  

function func3 (stringValue) {
    let res;
    if (stringValue.length > 6 && stringValue.length <= 10) {
    res = '*'.repeat(stringValue.length - 4) + stringValue.slice(-4);
    
    }
    return res;
}



  /*
  Задача 6.
  У тебя есть последовательность чисел от 8 до 88. М=[8,9,10...86,87,88].
   Одно из чисел встречается дважды.
   Как узнать, что это за число?

   Создаю функцию, которая принимает один аргумент - массив (arr). Объявляю переменую,
   как пустой массив (let res = []). Затем первым циклом я прохожу по 
   длине массива (i<arr.length). Вложенным в него циклом, где уже использую не длину изначального массива, а 
   длину массива объявленной переменной (j<res.length), я проверяю, был ли этот объект уже в массиве
   (if arr[j] == arr[i]), если да - возвращаю значение этого элемента. Если нет - по окончанию 
   вложенного цикла, в переменную res добавляю поточный элемент (arr[i]) методом .push.
  */




