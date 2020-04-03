"use strict";
// [1, 2, 3].forEach(alert);
// num = 5;
const bigNum = 123455434632411231342351234314214123425325141232n;
// alert(bigNum)
// let message = prompt("titl1");
// alert(`Your message is : ${message}`);

// let isBoss = confirm("Are you BOZZ?");
// if (isBoss)
//     alert("you are Boss");
// else
//     alert("You are not");

// alert('' || '' || "dded") // return first true value or last
// alert('asd' && 'sd' && "") // same but false value

// let x;
//
// false || (x=1);
//
// alert(x);

// let sum = 0;
//
// while (true){
//
//     let value = +prompt("Inset number");
//
//     if (!value)
//         break;
//
//     sum += value;
// }
//
// alert(`Sum = ${sum}`)

// outer:for (let i = 0; i < 3; i++) {
//
//     for (let j = 0; j < 3; j++) {
//
//         let input = prompt(`Coords value (${i},${j})`);
//
//         if (!input)
//             break outer;
//     }
// }
//
// alert("It's all!")

// function showPrimes(n) {
//
//     for (let i = 2; i < n; i++) {
//
//         if (!isPrime(i)) continue;
//
//         alert(i);  // простое
//     }
// }
//
// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if ( n % i === 0)
//             return false;
//     }
//     return true;
// }
//
// let number = prompt("Insert number");
// showPrimes(number);

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge2(age) {
    return age >= 18 ? true : confirm('Родители разрешили?');
}

function checkAge3(age) {
    return age >= 18 || confirm('Родители разрешили?') ;
}

// checkAge3(prompt("Insert number"));

let pow = function(x, n) {
    if (n === 1 ) return x;
    return x * pow(x, n-1);
};

let number = pow(2, 16);
// alert(pow);
