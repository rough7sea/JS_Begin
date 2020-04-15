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