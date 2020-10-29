let promise = Promise.resolve();

promise.then(() => console.log('promise done'))

console.log('code done');

promise = Promise.reject(new Error('error in promise'))

// setTimeout(()=> promise.catch(err => console.log(`${err.name} catch`)), 1000);

window.addEventListener('unhandledrejection', ev => console.log(ev.reason))



// async  function f() {
//     return 1;
// }

// f().then(console.log);

async function f() {

    let promise = new Promise(resolve =>
        setTimeout(() => resolve('done!'),1000 ));

    let result = await promise;

    console.log(result);

}

f();

async function showAvatar() {

    let response = await fetch('data.json');
    let user = await response.json();

    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.class = 'promise-avatar-example';
    document.body.append(img);

    await new Promise(resolve => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;

}

showAvatar();


class Thenable{
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject){
        console.log(resolve);

        setTimeout(()=>resolve(this.num * 2), 1000);
    }
}

(async ()=>{
    let result = await new Thenable(3);

    console.log(result);
})();


class Waiter{
    async wait(){
        return await Promise.resolve('done 4');
    }
}

new Waiter()
    .wait()
    .then(console.log);


async function f1() {
    try {
        let response = await fetch('https://no-user');
        let user = await response.json();
    }catch (e) {

        console.log(e);
    }
}

// f1();

async function f2(...args) {
    let i = 0;
    let urls = [];
    args.forEach(value => {
        urls.push(fetch(value));
    })
    let response = await Promise.all(urls);
    console.log(response);
}
f2('https://api.github.com/users/rough7sea').catch(console.log);


// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }
//
// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {

    try {
        let response = await fetch(url);

        if (response.status === 200)
            return await response.json();
    }catch (e) {
        throw new HttpError(e.status);
    }

}

async function demoGithubUser() {
    let name;
    let user;

    while (true){
        name = prompt("Введите логин?", "rough7sea");
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);

            if (!user){
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
                continue;
            }

            console.log(`Полное имя: ${user.name}.`);
            return user;

        } catch(err) {
            if (err instanceof HttpError) {
                console.log("bad request");
            } else {
                throw err;
            }
        }
    }
}

demoGithubUser();
