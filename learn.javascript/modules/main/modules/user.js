export default class User {
    constructor(name) {
        this.name = name || 'default user name';
    }

}

// same
// export {User as default}