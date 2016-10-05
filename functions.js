//function 1: create a function using arr sort
function sortArr(arr) {
    arr.sort(function(str1, str2) {
        return str2.length - str1.length;
    });
    return arr[0];
}

var arrTest = ['YOU', 'ME', 'BANANA', 'MARVELOUS'];

console.log(sortArr(arrTest));

//function 2: Object name and email
var arrContact = [
    {name: 'Matty', email: 'matty@gmail.com'},
    {name: 'Dog', email: 'dog@gmail.com'},
    {name: 'honeybadger', email: 'honeybadger@gmail.com'}
];
function sortByName (arr) {
    arr.sort(function (name1, name2) {
        return name2.name.length - name1.name.length;
    })
    return arr;
}

function sortByEmail (arr) {
   return arr.sort(function(email1, email2) {
       if(email1.email > email2.email) {
         return 1
       } else if (email1.email < email2.email) {
         return -1
       } else {
         return 0;
       }
    })
}

//function 3: using map return square
function squareStuff(arr) {
    return arr.map(function(num){
        return num * num
    });
}

//function 4: using map to square the 'num' properties of an object
var arrTest = [{name: 'number1', num: 4}, {name: 'number2', num: 7}, {name: 'number3', num: 3}];

function squareObjNum (arr) {
    return arr.map(function(a) {
        return a.num * a.num;
    })
}

