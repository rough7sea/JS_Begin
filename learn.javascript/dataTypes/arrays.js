let fruits = ['apples', 'oranges','pears'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(fruits.length);

fruits[3] = 'coconut';
console.log(fruits.length);

console.log(fruits);

let arr = ['some', { name:'Slim Shady'}, ()=>{console.log("Hy!")}];

console.log(arr[1].name);
arr[2]();

console.log(fruits.push('mango')) // sout length
console.log("shift = " + fruits.shift() + " and length = " + fruits.length);
console.log(fruits.unshift('apples')); // sout length
console.log(fruits)

console.log("pop = " + fruits.pop())

for (let i = 0; i < fruits.length; i++) {
    fruits[i];
}
for (let fruit of fruits)
    fruits;

// console.log(fruits.length);
console.log(fruits.length);

let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
console.log(array)

function getMaxSubStr(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr){
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0)
            partialSum = 0;
    }

    return maxSum;
}
// console.log(getMaxSubStr([1, 2, 3, 4, 5]));
// console.log(getMaxSubStr([-1, 2, 3, 4, 5]));
// console.log(getMaxSubStr([1, -1, 3, 4, 5]));
// console.log(getMaxSubStr([4, 2, -5, 4, 5]));
console.log(getMaxSubStr([13,-4, 1, 1, 5, -10, 1, 1, 1, 1, 9]));


arr = ['me', 'and me', 'again me'];
console.log(arr.splice(0,2, 'some', 'body'));
console.log(arr)
console.log(arr.splice(-1,0,'any', 'thing'))
console.log(arr)

console.log('============================');

let a1 = arr.slice();
console.log(a1);
console.log(arr.slice(1, 3));
console.log(arr.slice(-2));

a1.push('Mama');
console.log(a1);
console.log(arr);

let num = [1 , 2]

console.log(num.concat([3, 4]));
console.log(num.concat([3, 4], [5, 6]));
console.log(num.concat([3, 4], 5, 6));

// console.log(users);
let user = {
    0 : 'm1',
    1 : false,
    [Symbol.isConcatSpreadable]: true,
    length : 2,
}
console.log(num = num.concat(user));

num.forEach((item, index, array)=>{
    console.log(`${item} at index = ${index} in ${array}`)
});

num.forEach(console.log); // item, index, array

console.log(num.indexOf(1))
console.log(num.indexOf(false));
console.log(num.indexOf(null));

console.log(num.includes('m1'));
console.log(num.includes('m2'));

num.push(NaN);

console.log(num.indexOf(NaN)); // wrong
console.log(num.includes(NaN)); // right

let users = [
    {id : 1, name : 'John'},
    {id : 1, name : 'John-'},
    {id : 1, name : 'John+'},
    {id : 1, name : 'John!'},
    {id : 2, name : 'John2'},
    {id : 3, name : 'John3'},
];

console.log(users.find(
    item => item.id === 1 && item.name ==='John!'));

console.log(users.filter(value => value.id < 2));

let lengths = ['12345', '1234','123456'];

console.log(lengths.map(value => {
    return {id : value.length, value};
}))

num = [4, 1, 3, 2, -1, -3, -1.3 , -4.3, 6.5]
num.push(5, 2, 7, 15)

console.log(num.sort(((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
})));

console.log(num.sort(((a, b) => {
    return a - b;
})));

console.log(num.reverse())

let string = "some, bode, once"
console.log(string.split(", ",2))
console.log(string.split(''))

let splitArr = string.split(', ')

console.log(splitArr.join(';'));

num = [1, 2, 3,4 ,5];

console.log(num.reduce((sum, current) => sum + current, 0))

console.log(Array.isArray({}))
console.log(Array.isArray([]))

let filter = {
    min : 16,
    max : 50,
    canJoin(user){
        return user.age > this.min && user.age < this.max;
    }
}

users = [
    {age : 13},
    {age : 16},
    {age : 18},
    {age : 33},
    {age : 50},
    {age : 53},
]

console.log(users.filter(filter.canJoin, filter))
console.log(users.filter(user => filter.canJoin(user))) // the same

function topFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

function camelize(str) {
    if (str[0] === '-')
        str = ' ' + str;
    let res = str
        .split('-')
        .map(
            (value, index) => index === 0 ?  value :  topFirst(value)
        )
        .join('')
    if (res[0] === ' ')
        return res.slice(1);
    return res;
}
console.log(camelize('ssdsdsd-dddd-ffff'))
console.log(camelize('-ssdsdsd-dddd-ffff'))
console.log(camelize(' -ssdsdsd-dddd-ffff'))
console.log(camelize('ssdsdsd-dddd-ffff-'))


function filterRange(arr, a, b) {
    return arr.filter(value => value > a && value < b);
}

console.log(filterRange([1,2,3,4,5,6], 3,5))
console.log(filterRange([13,42,3,44,35, 86], 20,43))
console.log(filterRange([1,2,0,0,5,6], -1,5))

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val < a || val > b){
            arr.splice(i--,1);
        }
    }
}
arr = [13, 42, 3, 44, 35, 20, 43, 86];
filterRangeInPlace(arr, 20, 43);
console.log(arr)

console.log(arr.slice().sort((a, b) => a -b).reverse());
console.log(arr);
function calculate(str) {
    return eval(str);
}

console.log(calculate('7 + 6'));
console.log(calculate('7 * 6'));
console.log(calculate('7 ** 6'));
console.log(calculate('7 / 6'));

arr = [
    { name: "Вася", age: 25 },
    { name: "Петя", age: 30 },
    { name: "Маша", age: 28 },
];

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}
console.log(sortByAge(arr));

function shuffle(array) {
    for (let i = array.length - 1; i >0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
}
console.log(shuffle([1,2,3]));

let count = {
    '123':0,
    '132':0,
    '213':0,
    '231':0,
    '312':0,
    '321':0,
}
for (let i = 0; i < 1000000; i++) {
    array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}
for(let key in count)
    console.log(`${key} : ${count[key]}`);


let s = 'some same word without sense in this same length sentence with some word some';

function mapping(string) {
    let a = string.split(' ');
    let map = {};
    for (let s of a){
        map[s] === undefined ? map[s] = 1 : map[s]++;
    }
    return map;
}
console.log(mapping(s));

let range = {
    from : 1,
    to : 5,
}

range[Symbol.iterator] = function(){

  return{
      current : this.from,
      last : this.to,

      next() {

          if (this.current <= this.last)
              return {done : false, value : this.current++};
          else
              return {done: true};
      }

  };

};

for (let num of range)
    console.log(num);

range = {
    from : 1,
    to : 5,

    [Symbol.iterator] (){

        return{
            current : this.from,
            last : this.to,

                next() {

                    if (this.current <= this.last)
                        return {done : false, value : this.current++};
                    else
                        return {done: true};
                }

        };

    }
}

range = {
    from : 1,
    to : 5,

    [Symbol.iterator] (){
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to)
            return {done : false, value : this.current++};
        else
            return {done: true};
    }
}

for (let num of range)
    console.log(num);

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

console.log(Array.from(range));
console.log(Array.from(range, num => num * num));
console.log(Array.from('mieau'))
console.log(Array.from(arrayLike));
