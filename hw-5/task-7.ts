(function (num: number) {
    let startResult = 1;
    for (let i = 1; i <= num; i++) {
        startResult *= i;
    }
    console.log(startResult);
})(6);
