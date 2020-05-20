let hi = new Function('console.log("hi!")')
hi();

let func = new Function('a', 'b', 'return a + b');
console.log(func(1, 3));
func = new Function('a,b', 'return a + b');
console.log(func(2, 4));

// setTimeout(()=> console.log("IIII"), 1000);
// let timeId = setTimeout((value)=> console.log(value), 1000, 'mimi');
// console.log(timeId);
// clearTimeout(timeId)
// console.log(timeId);
let num = 0;
// let time2 = setInterval(()=>console.log(num++), 1000);
// setTimeout(()=>{clearInterval(time2); console.log('stop');}, 5000);

// let time2 = setTimeout(function fun(){
//
//     console.log(num++);
//     if (num<5)
//         time2 = setTimeout(fun, 500 * num)
//
// });

function slow(x){
    console.log(`called with ${x}`);
    return x;
}
function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x))
            return cache.get(x);

        let result = func(x);

        cache.set(x, result);

        return result;
    }
}

slow = cachingDecorator(slow);
console.log(slow(4));
console.log(slow(4));
console.log(slow(5));

function Hi() {
    return this.name + " hi!";
}
let user = {name : "John"}
let user2 = {name : "Dave"}

console.log(Hi.call(user));
console.log(Hi.call(user2));

function say(phrase) {
    return phrase + this.name;
}
console.log(say.call(user, 'fuck you '));
console.log(say.call(user2, 'no, please, fuck you '));

let worker = {
    someMethod(){
        for (let i = 0; i < 200000000; i++) {}
        return 1;
    },

    slow(x){
        console.log('Called ' + x);
        let k = this.someMethod();
        return x * k;
    }
};
function cachingDecorator2(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x))
            return cache.get(x);

        let result = func.call(this, x);

        cache.set(x, result);

        return result;
    }
}

worker.slow = cachingDecorator2(worker.slow);

console.log(worker.slow(2));
console.log(worker.slow(2));
console.log(worker.slow(3));
console.log(worker.slow(3));
console.log(worker.slow(4));

worker = {
    slow(a, b){
        console.log(`first:${a}, second:${b}`);
        return a + b;
    }
};

function cacheDecorator3(func, hash){
    let cache = new Map();
    return function () {
        let key = hash(arguments);
        if (cache.has(key)){
            return cache.get(key)
        }

        let result = func.apply(this, arguments);

        cache.set(key, result);

        return result;
    }
}

function hash(args) {
    // return args[0] + ',' + args[1]; // cool
    // return args.join(); // cooler, but don't work
    return [].join.call(args); // freaking amazing
}

worker.slow = cacheDecorator3(worker.slow, hash);

console.log(worker.slow(1, 2));
console.log(worker.slow(1, 2));
console.log(worker.slow(4, 3));

function spy(fun){

    function wrapper() {
        wrapper.calls.push('call:' + [].join.call(arguments))
        return fun.apply(this, arguments);
    }

    wrapper.calls = [];

    return wrapper;

}
function work(a, b) {
    console.log(a + b);
}
work = spy(work);

work(1, 2);
work(3, 4);

for(let args of work.calls){
    console.log(args);
}

function delay(f, ms) {
    return function(){
        setTimeout(()=> f.apply(this, arguments), ms)
    }
}

function f2(text){
    console.log(text);
}
// let f1 = delay(f2, 1000);

// f1('test');

function debounce(f, ms){

    let isCooldown = false;

    return function () {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(()=> isCooldown = false, ms)
    };
}

let f = debounce(console.log, 1000);

f(1);
f(2);
f(3);

function throttle(func, ms) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled){
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs)
                wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
        }, ms);

    }

    return wrapper;
}
console.log('-----');
let f1000 = throttle(f2, 1000);

f1000(1);
f1000(2);
f1000(3);


