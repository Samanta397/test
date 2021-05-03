// Сделать функцию которая обрезает массив до указанного значения
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

function array_skip_until(arr, value) {
    let newArr = [];
    let index = arr.indexOf(value);

    if (index > 0) {
        for (let i = index; i < arr.length; i++){
            newArr.push(arr[i]);
        }
        return newArr;
    }
    return [];
}

let result = array_skip_until(testData, 2);
let result2 = array_skip_until(testData, "Rafshan");
let result3 = array_skip_until(testData, "asd");