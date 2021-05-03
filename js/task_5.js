// Выведите все элементы массива используя рекурсию.

var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 

function recuseLog(arr) {
    console.log( arr.shift() );

    if (arr.length !== 0){
        recuseLog(arr);
    }
}

recuseLog(arr);