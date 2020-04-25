let map = new Map();

let john = {
    name: "john",
    age : 23,
}
map.set(john, 123);
console.log(map.get(john));

john.name = "not john";

console.log(map.keys());
console.log(map.delete(333))

map = new Map([
    ['a',1],
    ['b',2],
    ['c',3],
]);

// map.set(Object.entries(john));

for (let k of map.keys())
    console.log(k)

for (let v of map.values())
    console.log(v)

for (let entry of map.entries())
    console.log(entry)

map.forEach((value, key) =>
    console.log(`value = ${value} and key = ${key}`)
)

map = new Map(Object.entries(john));
console.log(map);

let object = Object.fromEntries(map);
console.log(object);

let set = new Set();

console.log(set.add(john));

console.log(set)

function filtration(values) {
    return Array.from(new Set(values));
}

console.log(
    filtration(
        'some same word without sense in this same length sentence with some word some'
            .split(' ')))


function anagramSort(array) {
    let map = new Map();
    for (let w of array){
        map.set(w.toLowerCase().split('').sort().join(''), w)
    }
    return Array.from(map.values());
}

console.log(
    anagramSort(
        ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))

console.log(Object.keys(john))
console.log(Object.values(john))


let prises = {
    banana : 11,
    coconut : 3,
    melon : 12,
}
console.log(
    Object.entries(prises)
        .map(([key, value]) => [key, value * 2]));

console.log(
    Object.values(prises)
        .reduce((sum,value) => sum + value)
)
console.log(
    Object.keys(prises).length
)

let [name, name2, ,name4 ] = 'name1 name2 name3 name4'.split(' ');
console.log(name);
console.log(name2);
console.log(name4);

[name, name2, ,name4 ] = new Set([1, 2, 3, 4]);
console.log(name);
console.log(name2);
console.log(name4);

[name, name2, , ...rest ] ='1, b, c, a, d, h ,g f'.split(' ');
console.log(name);
console.log(name2);
console.log(rest);

let [surname = 'Anonymous', lastName = 'ddddd'] = ['Julia']
// console.log(name);
console.log(surname);
console.log(lastName);

let options = {
    // title : "ME",
    width : 10,
    height : 20,
    size : 9
};

let {width, height, title = "Not me"} = options;

console.log(title);
console.log(height);
console.log(width);

delete options.width;

({width : w = 10, size, height} = options);

console.log(height);
console.log(size);
console.log(w);

options = {
    size: {
        width : 1,
        height : 2,
    },
    extra : true,
    items : ['me','cake'],
};
({
    size, // : {
//         width,
//         height,
//     },
    items: [item1, item2],
    title : t = 'default'
} = options);

console.log(width);
console.log(height);
console.log(size);
console.log(item1);
console.log(item2);
console.log(title);


function showObject({items = null, extra = false}={}) {
    console.log(`size = ${width}x${height}\nitems = ${items}\nextra is ${extra}`)
}

showObject(options);

showObject();

let date = new Date();
console.log(date.toLocaleString());

let jan = new Date(0);
console.log(jan)
console.log(new Date(24 * 3600 * 1000))
console.log(new Date(-24 * 3600 * 1000))
console.log(new Date("2020-04-24"))
console.log(new Date("24-02-2020"))
console.log(new Date(2020, 24, 4))
date = new Date(2020, 24, 4);
console.log(date.toLocaleString())
console.log(date.getDate())
console.log('day = ' + date.getDay()) // 0 - sunday, 1 - monday ...
console.log(date.getFullYear())

console.log('my hours = ' + date.getHours())
console.log('utc hours = ' + date.getUTCHours())

console.log('+ =' + +date);
console.log('getTime() =' + date.getTime()) // the same

date.setDate(date.getDate() + 2) // + 2 days
console.log(date.toLocaleString())


// let time = new Date();
// for (let i = 0; i < 100000; i++) {
//     for (let j = i; j < 100000 ; j++) {
//         let something = i * i * i;
//     }
// }
// console.log('work time = ' + (Date.now() - time))


function timeDiff1(d1, d2) {
    return d2 - d1;
}
function timeDiff2(d1, d2) {
    return d2.getTime() - d1.getTime();
}
function bench(f) {
    let d1 = new Date(0);
    let d2 = new Date();
    let start = Date.now();
    for (let i = 0; i < 1000000; i++)
        f(d1, d2)

    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

for (let i = 0; i < 10; i++) {
    // time1 += bench(timeDiff1);
    // time2 += bench(timeDiff2);
}

console.log('first diff = ' + time1);
console.log('getTime diff = ' + time2);


//  20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
console.log(new Date(Date.parse('2012-02-20T03:12')).toLocaleString())
console.log(new Date(2012, 2,20, 3, 12).toLocaleString())

function weekDay(num) {
    switch (num) {
        case 0: return 'sunday';
        case 1: return 'monday';
        case 2: return 'tuesday';
        case 3: return 'wednesday';
        case 4: return 'thursday';
        case 5: return 'friday';
        case 6: return 'saturday';
        default : return undefined;
    }

}
function getLocateDay(num){
    return weekDay(num - 1);
}
console.log(weekDay(new Date(Date.now()).getDay()))
console.log(getLocateDay(new Date(Date.now()).getDay()))


function getSecondsToTomorrow() {
    let tomorrow = new Date(Date.now());
    tomorrow.setSeconds(0);
    tomorrow.setMinutes(0);
    tomorrow.setHours(0);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return (tomorrow.getTime() - Date.now());
}
let time = new Date(getSecondsToTomorrow());
console.log(`${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`)