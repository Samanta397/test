// Расширить прототип Array, добавив к нему метод добавления элемента
//  в начало без  использование unshift.

let arr = [1,2,3,4];

Array.prototype.append = function(num) {
     return [num].concat(...this);
}

console.log( arr.append(0) );


