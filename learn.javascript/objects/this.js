let user = {
    name : "John",
    age : 30,
    sayHi() {
        console.log(this.name + " say Hi!");
    }
};

user.sayHi();
user['sayHi'](); // the same

sayUndefHi = () => {
  console.log(this.name);
};
sayUndefHi();

(user.name === "John" ? user.sayHi : console.log(this.name))();

user = {
    firstName: "Jim",
    sayHi() {
        let arrow = () =>{
            console.log(this.firstName);
        };
        arrow();
    }

};

user.sayHi();

let ladder = {
    step : 0,
    up(){
      this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    show(){
      console.log(this.step);
      return this;
    }

};

ladder.up().up().down().up().show().down().down().show();

console.log(user);

let anotherObj = {};

anotherObj[user] = 123;

console.log(anotherObj);

console.log(Number(user));

console.log(+user);
console.log("=============================");

user = {
    name : 'Karl',
    age: 10,

    // [Symbol.toPrimitive](hint){
    //     console.log(`hint: ${hint}`);
    //     return hint == "string" ? `{name: "${this.name}"}` : this.age;
    // },

    toString(){
        return `{name: "${this.name}"}`;
    },

    valueOf(){
      return this.age;
    }
};

console.log(user.toString());
console.log(+user);
console.log(user + 500);


function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user1 = new User("Karl");

let user2 = new function () { // constructor without reusing
    this.name = "John";
    this.age = 30;
};

function User1() {
    console.log(new.target);
}

User1();

new User1();

function User2(name) {
    if (!new.target)
        return new User2(name);

    this.name = name;

    this.say = () =>{
        console.log("Hello " + this.name)
    }
}

let vasya = User2('Vasya');
console.log(vasya);
vasya.say();