function sumAll(...args){
    let sum = 0;
    for (let arg of args)
        // console.log(arg)
        sum += +arg;
    return sum;
}

// console.log(sumAll(1, 2, 3, 4))
// console.log(sumAll(1, 2, 3,))
// console.log(sumAll(1, 2, ))
// console.log(sumAll(1, 2, 3, 4, 5))

function mySum(first, second, ...rest) {
    console.log('sum = ' + (+first + +second));
    console.log('rest = ' + sumAll(...rest));
    // console.log('rest = ' + sumAll(Array.from(rest))); // NaN
}

mySum(1, 2, 3, 4, 5 ,6)


function f(){
    let name = 'Peter';
    return function() {
        console.log('hi ' + name);
    }
}

let name = 'John';

let work = f();
work();


// f1(); error
let phrase = 'pizdui work';
f1(); // ne error
function f1() {
    console.log(phrase);
}

function sum(n1) {
    return function(n2) {
        return n1 + n2;
    }
}

let fun = sum(3);

console.log(fun(4));
console.log(fun(5));


let arr = [ 1, 2, 3, 4, 5, 6, 7, 8];
function inBetween(a, b) {
    return function (x) {
        return (x >= a && x <= b)
    };
}
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}
console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1,2,4])));

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
console.log(users.sort(byField('surname')));


function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function() { // функция shooter
            console.log( j ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
