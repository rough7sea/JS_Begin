// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.voise = function(){
    console.log(`Cat ${this.name} says myay`)
};
const cat = new Cat('Kot', 'white');
// cat.voise();

// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.__proto__ === Cat.prototype);
// console.log(Cat.constructor);

// ===========
function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'ME';

// console.log('skin' in person);
// console.log(person.legs);

// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('skin'));

// Object.create()
let  proto = { year: 2019 };
const  myYear = Object.create(proto);

console.log(myYear.year);
// proto.year = 2200;

proto = {
    year: 1999,
    city : 'Town'
};
console.log(myYear.year);

// console.log(myYear.hasOwnProperty('year'));
// console.log(myYear.__proto__ === proto);
