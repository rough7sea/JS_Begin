// Let
// let a = 'variable a';
// let b = 'variable b';
// {
//     a = 'new variable A';
//     let b = 'Local variable B';
//     console.log('Scope A', a);
//     console.log('Scope B', b);
// }
// console.log('A:', a);
// console.log('B:', b);

// const
const PORT = 8080;
const array = ['JavaScript', 'is', 'just js'];
array.push('!');
array[0] = 'Js';
console.log(array);

const obj = {};
obj.nackCount = 'ME';
obj.age = 20;
console.log(obj);
delete obj.age;
console.log(obj);