let student = {
    name : 'Danila',
    age : 20,
    isAdmin : true,
    courses : ['Java', 'JS', 'CoolGuyCourses'],
    wife : null,
    room: {
        number: 23,
        size : 'big',
    }
}

let json = JSON.stringify(student, null, 2);
console.log(typeof json);
console.log(json);

let user = {
    sayHi(){
        console.log('Hi!');
    },
    [Symbol("id")] : 123,
    something : undefined,
}
user = JSON.stringify(user);
console.log(typeof user);
console.log(user);


let room = {
    number : 8,
}
let meetup = {
    title : 'Important',
    participants: [{name: "John"}, {name: "Alice"}],
    date : new Date(),
}
room.event = meetup;
meetup.place = room;

// console.log(JSON.stringify(room)) // error
// console.log(JSON.stringify(meetup)) // error

console.log(JSON.stringify(meetup, ['title', 'participants']))
console.log(JSON.stringify(meetup, ['title', 'participants', 'name']))
console.log(JSON.stringify(meetup, ((key, value) => {
    if (key === 'date')
        return new Date(value).toLocaleString();

    return (key === 'place') ? undefined : value;

})))

room = {
    number: 12,
    meetup,
    toJSON(){
        return this.number;
    }
}
console.log(JSON.stringify(room))
meetup.place = room;
let str = JSON.stringify(meetup);
console.log(str)

meetup = JSON.parse(str, ((key, value) => {
    return (key === 'date') ? new Date(value) : value;
}));
console.log(meetup.date.toLocaleString())