let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;

console.log(target.test);
console.log(proxy.test);

for (let key in proxy)
    console.log(key);

let numbers = [0, 1, 3];

numbers = new Proxy(numbers, {
    get(target, prop, receiver) {
        if (prop in target){
            return target[prop];
        } else {
            return 0;
        }
    }
});

console.log(numbers[1]);
console.log(numbers[223]);

let dictionary = {
    'Hello' : 'Hola',
    'Bye' : 'Adios'
}

dictionary = new Proxy(dictionary,{
    get(target, prop, receiver) {
        if (prop in target)
            return target[prop]
        else
            return prop;
    }
})

console.log(dictionary['Hello']);
console.log(dictionary['Welcome']);

numbers = [];

numbers = new Proxy(numbers,{
    set(target, prop, value, receiver) {
        if (typeof value == 'number'){
            target[prop] = value;
            return true;
        } else
            return false;
    }
})

numbers.push(1);
numbers.push(2);
console.log(numbers.length);
// numbers.push("test"); //Type Error

let user = {
    name : 'Jesus',
    age : 13,
    _password : '****',
}

user = new Proxy(user,{
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
})

for (let key in user)
    console.log(key);

console.log(Object.keys(user));
console.log(Object.values(user));

user = {}

user = new Proxy(user,{
    ownKeys(target) {
        return ['a', 'b', 'c']
    },
    getOwnPropertyDescriptor(target, prop) {
        return{
            enumerable: true,
            configurable: true
        }
    }
})

console.log(user);
console.log(Object.keys(user));

console.log('==========================================================');

user = {
    name: 'Cat',
    _password: 'catCool',
    checkPassword(value){
        return value === this._password;
    },
}
user = new Proxy(user,{
    get(target, prop, receiver) {
        if (prop.startsWith('_')){
            return new Error("get Access rejected");
        }
        else{
            let value = target[prop];
            return (typeof value == 'function') ? value.bind(target) : value;
        }
    },
    set(target, p, value, receiver) {
        if (p.startsWith('_')){
            return new Error("set Access rejected");
        }
        else{
            target[p] = value;
            return true;
        }
    },
    deleteProperty(target, p) {
        if (p.startsWith('_')){
            return new Error("Access rejected");
        }
        else{
            delete target[p];
            return true;
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

try {
    console.log(user._password);
} catch (e){
    console.log(e.message);
}

user._password = 'test';
delete user._password;

for (let key in user)
    console.log(key);
console.log(user.checkPassword('catCool'));