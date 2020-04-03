const person = {
    surname : 'Stark',
    knows : function (what, name) {
        console.log(`You ${what} knows, ${name} ${this.surname}`)
    }
};
const john = { surname: 'Snow'};


// person.knows('all', 'Bran');
// // first param -> context
// person.knows.call(john, 'nothing', 'John');
// person.knows.apply(john, ['nothing', 'John']);
// person.knows.call(john, ...['nothing', 'John']);
// const bound = person.knows.bind(john, 'nothing', 'John');
// bound();

// =========

function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

// const elena = new Person('Elena', 20);
//
// // ============= Явный
// function logThis() {
//     console.log(this);
// }
//
// const  obj = {num: 42};
// logThis.apply(obj);
// logThis.call(obj);
// logThis.bind(obj)();
//
//  // ============= Неявный контекст
// const animal = {
//     legs : 4,
//     logThis : function(){
//         console.log(this);
//     }
// };
//
// animal.logThis();

//
function Cat(color) {
    this.color = color;
    console.log('This', this);
    ( ()=> console.log('Arrow this', this) ) ();
}
new Cat('red');