

function loadGitHubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(result => result.json());
}

function showAvatar(githubUser) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);

        setTimeout(()=>{
            img.remove();
            resolve(githubUser);
        }, 3000)
    })

}

// loadGitHubUser('rough7sea')
//     .then(showAvatar)
//     .then(user => alert(`Avatar display ${user.name} completed`))
//     .catch(error => console.log(error));


Promise.all([
    new Promise(resolve => setTimeout(()=>resolve(1), 3000)),
    new Promise(resolve => setTimeout(()=>resolve(2), 2000)),
    new Promise(resolve => setTimeout(()=>resolve(3), 1000)),
]).then(console.log);

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));

// Promise.all(requests)
//     .then(responses => responses.forEach(
//         response => console.log(`${response.url}: ${response.status}`)
//     ));

let names = ['iliakan', 'remy', 'rough7sea', 'jeresig'];

requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        for (let response of responses)
            console.log(`${response.url}: ${response.status}`);

        return responses;
    })
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(users => users.forEach(user => console.log(user.name)));

Promise.all(
    [new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(1), 1000);
    }),
        '2222',
        '3333',]
).then(console.log);

urls = [
    'data.json',
    'test.js',
    'sst.js'
];
Promise.allSettled(urls.map(url => fetch(url)))
    .then(results =>{ results.forEach((result, num) =>{
        if (result.status === 'fulfilled')
            console.log(`${urls[num]} : ${result.value.status}`);
        if (result.status === 'rejected')
            console.log(`${urls[num]} : ${result.reason}`);
    })
})


// in case if in brosew no Promise.allSettled
// if(!Promise.allSettled) {
//     Promise.allSettled = function(promises) {
//         return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
//             status: 'fulfilled',
//             value: value
//         }), error => ({
//             status: 'rejected',
//             reason: error
//         }))));
//     };
// }

Promise.race([
    new Promise(((resolve) => setTimeout(()=> resolve('first'),1000))),
    new Promise(((resolve, reject) => setTimeout(()=> reject(new Error('second')),2000))),
    new Promise(((resolve) => setTimeout(()=> resolve('third'),3000)))
])
    .then(console.log)
    .catch(console.log);

let cache = new Map();

function loadCached(url) {
    if (cache.has(url))
        return Promise.resolve(cache.get(url))

    return fetch(url)
        .then(response => response.text())
        .then(text => {
            cache.set(url, text);
            return text;
        })
}



function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
}
// использование:
// loadScript('path/script.js', (err, script) => {...})


function loadScriptPromise(src) {
    return new Promise(((resolve, reject) => {
        loadScript(src, (err, script) =>{
          if (err) reject(err);
          else resolve(script);
        })
    }))
}

function promisify(f) {
    return function (...args) {
        return new Promise(((resolve, reject) => {
            function callback(err, result) {
                if (err)
                    return reject(err);
                else
                    return resolve(result);
            }

            args.push(callback);

            f.call(this, ...args);
        }))
    }
}

let loadScriptPromise2 = promisify(loadScript);
// loadScriptPromise2().then();