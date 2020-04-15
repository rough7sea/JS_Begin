console.log(`hah \nhaha`);

let str = "\u{1F60D}mimimimi";
console.log(str);

console.log(str[3]);
console.log(str.charAt(3));

// for (let c of str)
//     console.log(c);

console.log(str.toUpperCase())

console.log(str.indexOf("imi"));
console.log(str.indexOf("a"));

let str1 = 'Widget with id';

console.log( str1.indexOf('id', 2))

function findPosition(str, target) {

    let pos = 0;

    while (true) {
        pos = srt2.indexOf(target, pos);
        if (pos === -1) break;

        console.log(`find ${target} at index ${pos++}`)
    }
}

let srt2 = "hi lflflflf hihi";
let target = "hi";

console.log("+++++++++++++++++++++++")
findPosition(srt2, target);

let str3 = "Widget";

if (~str3.indexOf("Widget")) // ~ -> -(n+1)
    console.log("match")

console.log(str3.includes("dg"));
console.log(str3.startsWith("Wid"));
console.log(str3.endsWith("get"));

console.log("=======slice====== ")
console.log(str3.slice(0,1));
console.log(str3.slice(0,4));
console.log(str3.slice(3));
console.log(str3.slice(-3,-1));

console.log("======substring=====")
console.log(str3.substring(2,4));
console.log(str3.substring(4,2));

console.log("=====substr=====")
console.log(str3.substr(2,4));
console.log(str3.substr(-2,4));

console.log("+++++++++++++++++++++++")
console.log('a' > 'Z');
console.log('a'.codePointAt(0));
console.log('Z'.codePointAt(0));

console.log('\u005a'); // z in hex

console.log('a'.localeCompare('A')); // String comparator java

console.log( '😂'.length );

let s1 = 'S\u0307\u0323';
let s2 = 'S\u0323\u0307';
console.log(`${s1} === ${s2} is ${s1 === s2}`);
console.log("but...");

console.log(`normalise ${s1} === ${s2} is ${s1.normalize() === s2.normalize()}`);

console.log("\u1e68");

function topFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

console.log(topFirst("mom"));

