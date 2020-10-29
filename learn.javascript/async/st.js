function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`can't load script from ${src}`));

    document.head.append(script);
}

function newFunc(){
    console.log('script ready');
}

// loadScript('test.js',function (error, script) {
//     newFunc();
// })


let promise = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve('done'), 1000)
    setTimeout(() => reject(new Error('kheh')), 1000)
});
promise.finally(() => console.log('finally'));

promise.then(
    result => console.log(result),
    error => console.log(error)
);

promise.then(console.log);

//promise.then(null, console.log)
promise.catch(console.log)



function loadScript2(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Error download script ${src}`))

        document.head.append(script);
    });
}

promise = loadScript2('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');
promise.then(
    script => console.log(`${script.src} done!`),
    error => console.log(`Error: ${error.message}`)
)

promise.then(script => console.log('one more'))

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// delay(3000).then(()=>console.log('done with 3s'));

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
});

class Thenable{
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject){
        console.log(resolve);
        setTimeout(() => resolve(this.num * 2), 1000);
    }
}


new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result);
        })
    .then(console.log);