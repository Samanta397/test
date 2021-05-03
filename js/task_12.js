//Создать функцию которая создает объект на 
// основании двух представленных массивов используя 
// один как ключи, а другой как значения. Не подходящие 
// ключи массивов должны быть исключены.

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

function array_combine(arr1, arr2){
    let newObj = {};
     
    for(let i = 0; i < arr1.length; i++){
        if(typeof arr1[i] !== "boolean"){
             newObj[arr1[i]] = arr2[i];
        }
    }

    return newObj;
}

let result = array_combine(testData, testData2)

console.log(result);

