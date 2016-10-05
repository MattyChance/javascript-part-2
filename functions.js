//function 1: create a function using arr sort
function sortArr(arr) {
    arr.sort(function(str1, str2) {
        return str2.length - str1.length;
    });
    return arr[0];
}

var arrTest = ['YOU', 'ME', 'BANANA', 'MARVELOUS'];

console.log(sortArr(arrTest));