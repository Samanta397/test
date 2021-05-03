// Напишите функцию cloneDeep таким образом, 
// чтобы она была способна клонировать переданный как параметр объект.


let myObj = {
    name: 'John', 
    age: 32, 
    dogs: ['Jessie', 'Max']
}

function deepCopy(obj) {
    let key, value, newObj;

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    newObj = Array.isArray(obj) ? [] : {};

    for (key in obj) {
        value  = obj[key];
        newObj[key] = deepCopy(value);
    }

    return newObj;

}

deepCopy(myObj);