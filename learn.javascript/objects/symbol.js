let id = Symbol("me");

let user = {
    name: "Вася",
    // [id] hide in outward
    [id]: "My own message",
    id:"different message"
};
for (let key in user)
    console.log(user[key]);

console.log( user[id]);

let clone = Object.assign({},user);

console.log(clone[id]);


let ids = Symbol.for("id");

let isAgain = Symbol.for('my symbol');

console.log(ids === isAgain);

let sym = Symbol.for('name');
let sym2 = Symbol('id');

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));
console.log(Symbol.keyFor(id));