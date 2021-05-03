//. Сделать функцию которая возвращает уникальные элементы массива.
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

function array_unique(arr) {
  let result = [];
  
  for (let value of arr) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  
  return result;
}

let result = array_unique(testData.concat(testData2));

console.log(result);