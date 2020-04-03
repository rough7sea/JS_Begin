// console.log("HI");
// console.log(typeof 0);
// console.log(typeof true);
// console.log(typeof 'Javascript');
// console.log(typeof undefined);
// console.log(typeof Math);
// console.log(typeof Symbol('JS'));
// console.log(typeof null);
// console.log(typeof function () {});
// console.log(typeof NaN);
// console.log(typeof 1/0);

// types cast
let language = 'JavaScript';
if (language){  // let -> boolean true
    console.log('Maybe the best language is: ', language)
}

// '', 0, null, undefined, NaN, false -> cast to false

// console.log(Boolean('')); // false
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// // but!
// console.log(Boolean('0')); // true
// console.log(Boolean([]));
// console.log(Boolean(function () {}));

// // strings and variables
// console.log(1 + '2');
// // console.log(1 + +'2');
// console.log('' - 1 + 0);
// console.log(''  + 1 + 0 - 1);
// console.log('' - 1 + 1 + 0);
// console.log('3' * '8');
// console.log('42px'-4);
// console.log(undefined + 42);
// console.log(null + 2);
// console.log(Boolean(null + 2));

// == vs ===
console.log(2 == '2');
console.log(2 === '2');

console.log(undefined == null);
console.log(undefined === null);

console.log('0' == false); // true
console.log('0' == 0); // true
console.log('======================');
//
console.log(false == '');
console.log(false == []);
console.log(false == {});

console.log('' == 0);
console.log('' == []);
console.log('' == {});

console.log(0 == []);
console.log(0 == {});
console.log(0 == null);

