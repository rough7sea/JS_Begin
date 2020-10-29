function* generate() {
    yield 1;
    yield 2;
    // return 3;
    yield 3;
}
let generator = generate();
console.log(generator);

for (let value of generator)
    console.log(value);

let sequence = [0, ...generate()];

console.log(sequence);


let range = {
    from: 1,
    to : 5,

    // [Symbol.iterator](){
    //     return {
    //         current: this.from,
    //         last : this.to,
    //
    //         next(){
    //             if (this.current <= this.last){
    //                 return {done : false, value : this.current++};
    //             }else {
    //                 return {done : true};
    //             }
    //         }
    //     };
    // }

    *[Symbol.iterator](){
        for (let value = this.from; value <= this.to; value++)
            yield value;
    }
};

console.log([...range]);

function* generateSequence(start, end) {
    for (let i = start; i <=end ; i++)
        yield i;
}

function* generatePasswordCode() {

    yield* generateSequence(48, 57);

    yield* generateSequence(65, 90);

    yield* generateSequence(97, 122);
}

let str = '';

for (let code of generatePasswordCode()){
    str += String.fromCharCode(code);
}
console.log(str);

function* gen() {

    try{
        let ask1 = yield '2 + 2 = ?';

        // alert(ask1);
    }catch (e) {
        console.log(e);
    }

    let ask2 = yield '3 * 3 = ?';

    // alert(ask2);
}

generator = gen();

// alert(generator.next().value);
// alert(generator.next(new Error('kek error')).value);
// alert(generator.next(9).done);

function* genRandom(seed) {

    let value = seed;
    while (true){
        value = value * 16807 % 2147483647;
        yield value;
    }
}

let rand = genRandom(1);
for (let i = 0; i < 3; i++) {
    console.log(rand.next().value);
}