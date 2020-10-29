class PowerArray extends Array{
    isEmpty(){
        return this.length === 0;
    }

    // static get [Symbol.species](){
    //     return array;
    // }
}

let arr = new PowerArray(1, 2, 3, 4, 5);

console.log(arr.isEmpty());

let filteredArray = arr.filter(item => item < 4);
console.log(filteredArray);
console.log(filteredArray.isEmpty()); // true


console.log(arr instanceof Array); // true
console.log(arr instanceof PowerArray); // true

class C1{
    static [Symbol.hasInstance](obj){
        if (obj.canEat) return true;
    }
}

let obj = {canEat: true};
console.log(obj instanceof C1); // true

function Rabbit() {}
let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit instanceof Rabbit); // false

let s = Object.prototype.toString;

arr = [];

console.log(s.call(arr));
console.log(s.call(123));
console.log(s.call(null));
console.log(s.call(console.log));

let user = {
    [Symbol.toStringTag] : 'User'
}

console.log({}.toString.call(user));

let sayMixin = {
    say(phrase){
        console.log(phrase);
    }
}
let sayHiMixin = {

    __proto__ : sayMixin,

    sayHi(){
        // console.log(`hi ${this.name}`);
        super.say(`hi ${this.name}`);
    },

    sayBye(){
        // console.log(`Bye ${this.name}`);
        super.say(`Bye ${this.name}`);
    }
}
class User{
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayHiMixin);


new User('Jesus').sayHi();
new User('Jesus').sayBye();
// new User('Jesus').say('he-he');

let eventMixin = {
    on(eventName, handler){
        if (!this._eventHandlers)
            this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },

    off(eventName, handler){
        let handlers = this._eventHandlers && this._eventHandlers[eventName];
        if (!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler){
                handlers.slice(i--, 1);
            }
        }
    },

    trigger(eventName, ...args){
        if (!this._eventHandlers || !this._eventHandlers[eventName])
            return;

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args))
    }
}

class Menu{
    choose(value){
        this.trigger('select', value);
    }
}
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on('select', value => console.log(`selected value ${value}`))

menu.choose('123');

try{

    lala;

} catch (error) {
    console.log(error.message);
}

let json;
json = '{"name":"John"}';
// json = '{name:"John","age":20}';

try {
    user = JSON.parse(json);
    console.log(user.name);

    if (user.age)
        console.log(user.age);

}catch (error) {
    if (error.name === 'SyntaxError')
        console.log(error.message);
    else
        throw error;
}

// noneexistentFunc();
process.on('uncaughtExceptionMonitor',
    (error, origin)=>{
        fs.writeSync(
            process.stderr.fd,
            `Cought Moterfucker Exception ${error}\n` +
            `Origin ${origi }`
        );
    });


process.on('exit',
    ()=> console.log('exit with code fuck you'));

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

function test() {
    throw new ValidationError('fe');
}

try{
    test();
}catch (e) {
    console.log(e.message);
    // console.log(e.name);
    // console.log(e.stack);
}

class PropertyRequiredError extends ValidationError{
    constructor(property) {
        super(`${property} is absent`);
        this.property = property;
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age){
        throw new PropertyRequiredError('age');
    }
    if (!user.name){
        throw new PropertyRequiredError('name');
    }

    return user;
}

try {
    let user = readUser('{"age":34}')
}catch (e) {
    if (e instanceof ValidationError){
        console.log(`invalid data : ${e.message}` );
    }else if (e instanceof SyntaxError){
        console.log(`invalid syntax : ${e.message}`);
    }else {
        throw e;
    }

}
