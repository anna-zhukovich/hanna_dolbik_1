let user: {name: string, age: number, isAdmin: boolean} = {
    name: 'John',
    age: 30,
    isAdmin: true,
};

for (let key in user) {
    console.log(key);
}
for (let key in user) {     
    console.log(user[key as keyof typeof user]);
}