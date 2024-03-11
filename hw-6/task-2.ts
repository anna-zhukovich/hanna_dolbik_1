let getKeys = { a: 1, b: 2 };
for (let key in getKeys) {
    if (key === 'b') {
        console.log('true');
    }
}
