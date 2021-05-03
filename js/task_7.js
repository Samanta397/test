// Сделать функцию поиска значений в массиве.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_find(arr, value){
    for (let i = 0; i < arr.length; i++){
        if (value.__proto__ === RegExp.prototype){
            if (value.test( arr[i] )){
                return [arr[i]];
            }
        }
       
        if (arr[i] === value){
            return [arr[i]];
        }
    }
    return -1;
}

let result = array_find(testData, /^raf.*/i);
let result2 = array_find(testData, "Rafshan");






