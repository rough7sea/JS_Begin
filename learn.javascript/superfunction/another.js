"use strict"
let user = {
    name:'Jesus'
}

function out(phrase){
    console.log(this.name + ' say ' + phrase);
}

let boundFunc = out.bind(user);

boundFunc('fuck you');

user = {
    name:'Jesus',
    hi(phrase){
       console.log(this.name + ' ' + phrase);
    }
}
let sayHi = user.hi.bind(user);

sayHi('hehe?');

// setTimeout(sayHi, 0, 'hehe')

function mul(a, b) {
    return a * b;
}
let double = mul.bind(null, 2);

console.log(double(3));

function partial(func, ...argsBound) {
    return function(...args){
        return func.call(this, ...argsBound, ...args);
    }
}

user = {
    // name:'Jesus',
    say(time, phrase){
        console.log(`[${time}] ${this.name}: ${phrase}!`);
    }
}

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes())

let person = {
    name : 'not Jesus'
}

boundFunc = user.sayNow.bind(person);
boundFunc('&fuck?');
boundFunc = user.sayNow.bind({name :'not not'});
boundFunc('&fuck?');
boundFunc = boundFunc.bind({name :'meme'});
boundFunc('&fuck?');