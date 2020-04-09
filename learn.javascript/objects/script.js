let user = createUser("John", 34);

let key = "name";
    // prompt("Do you wanna know something about?", "name");

if (key in user)
    console.log(`${key} : ${user[key]}, and height : ${user.height}`);
else
    console.log(`property '${key}' doesn't exists in user`);

function createUser(name, age) {
    return {
        name,
        age,
        height : 185,
    }
}

function showObject(obj) {
    for (let key in obj){
        console.log(`${key} : ${obj[key]}`)
    }
}


user = {name: "John"};

const permission1 = { canView : true};
const permission2 = { canEdit : true};

Object.assign(user, permission1, permission2);

let user_clone = {};

Object.assign(user_clone, user); // clone object

user_clone.name = "Peter";
delete user_clone.canEdit;  // delete property

showObject(user);
showObject(user_clone);
