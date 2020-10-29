let range = {
    from : 1,
    to : 5,

    [Symbol.asyncIterator](){
        return{
            current : this.from,
            last : this.to,


            async next(){
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (this.current <= this.last){
                    return { done: false, value: this.current++};
                } else {
                    return { done: true};
                }
            }
        }
    }
};

// (async ()=> {
//     for await (let value of range){
//         console.log(value);
//     }
//     console.log('done');
// })();


async function* generateSequence(start, end) {
    for (let i = start; i <= end ; i++){
        await new Promise(resolve => setTimeout(resolve, 1000))
        yield i;
    }
}

(async ()=>{
    let generator = generateSequence(1, 5);
    // for await (let value of generator)
    //      console.log(value);
    // let result = await generator.next();
    // console.log(result);
})();

range = {
    from : 1,
    to : 5,

    async *[Symbol.asyncIterator](){
        for (let value = this.from; value <= this.to; value++){

            await new Promise(resolve => setTimeout(resolve, 1000));

            yield value;
        }
    }
};

(async ()=>{
    // for await (let value of range)
        // console.log(value);
})();


async function* fetchCommits(repo) {

    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url){
        const response = await fetch(url, {
            headers: {'User-Agent': 'Our script'},
        });

        const body = await response.json();

        console.log(body);

        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
        nextPage = nextPage && nextPage[1];

        url = nextPage;

        for (let commit of body)
            yield commit;
    }
}

(async ()=>{

    let count = 0;

    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')){

        // console.log(commit.author.login);

        if (++count === 100)
            break;
    }
})();