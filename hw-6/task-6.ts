interface User {
    username: string;
    password: string;
}

let newObj = {
    user: {} as User,

    register(username: string, password: string) : void {
        this.user.username = username;
        this.user.password = password;
        console.log(newObj.user);
    },

    validate(username: string, password: string): void {
        // return "Добр.." if username && password the same as in "user" prop
           if (this.user.username === username && this.user.password === password) {
            console.log("Добро пожаловать!");
        }
    }
};


newObj.register('masha', 'test');
//newObj.validate('masha', 'tes');
newObj.validate('masha', 'test');