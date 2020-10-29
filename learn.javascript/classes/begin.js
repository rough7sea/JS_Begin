let User = class MyClass{
    sayHi(){
        console.log(MyClass);
    }
}
new User().sayHi();

class C1{
    constructor(name) {
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length < 4){
            console.log('this name is to short');
            return;
        }
        this._name = value;
    }
}

let c = new C1("John");
console.log(c.name);

c = new C1('');

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} стоит.`);
    }
}

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} is hiding`);
    }
    stop(){
        super.stop();
        this.hide();
    }
}

let rabbit = new Rabbit('white rabbit');

rabbit.run(1);
rabbit.hide();
rabbit.stop();

class Clock {

    constructor({ template }) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

// let time = new Clock({template : 'h:m:s'})
// time.start();

class ExtendedClock extends Clock{
    constructor({template, precision}) {
        super({template});
        this.precision = precision || 1000;
    }
    start() {
        this.render();
        this.timer = setInterval(()=> this.render(), this.precision);
    }
}

let time = new ExtendedClock({template : 'h.m.s', precision : 2000})
// time.start();
// setTimeout(()=> time.stop(), 5000)

class U1{
    static staticMethod(){
        console.log('static 1');
    }
    static staticMethod2(){
        console.log('static 2');
    }
}
U1.notStaticMethod = function(){
    console.log('outer static');
}

U1.staticMethod();

U1.staticMethod2();

U1.notStaticMethod();

class Article{
    static publisher = 'Danila';
    _waterAmount = 0;
    #waterLimit  = 200;

    // #checkWater(value){
    //     if(value < 0 )
    //         console.log('water level < 0');
    //
    //     if (value > this.#waterLimit)
    //         console.log('to much water');
    // }

    set waterAmount(value){
        if(value < 0){
            // throw new Error(`no water amount < 0`);
            console.log(`no water amount < 0`);
        } else{

            // this.#checkWater(value);
            this._waterAmount = value;
        }
    }

    get waterAmount(){
        return this._waterAmount;
    }

    constructor(title, date) {
        this.title = title;
        this.date = date;
        this._power = 100;
    }
    get power(){
        return this._power;
    }

    static createArticle(){
        return new this('Today is', new Date().toLocaleString());
    }
    log(){
        return `${this.title} ${this.date} @${Article.publisher}`
    }

}

let article = Article.createArticle();

console.log(article.log());
console.log(Article.publisher);
article.waterAmount = -1;
console.log(article._waterAmount);
article.power = 19; // don't work
console.log(article.power);

class CoffeeMachine{
    #waterAmount = 0;

    get waterAmount(){
        return this.#waterAmount;
    }

    set waterAmount(value){
        if (value < 0)
            console.log('too small value');
        else
            this.#waterAmount = value;
    }
}

let coffeeMachine = new CoffeeMachine();
coffeeMachine.waterAmount = -120;
coffeeMachine.waterAmount = 120;
console.log(coffeeMachine.waterAmount);