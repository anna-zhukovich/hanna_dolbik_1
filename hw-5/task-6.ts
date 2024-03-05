function fooboo(boolValue: boolean, foo: () => void, boo: () => void): void {
    boolValue ? foo() : boo();
}

function call1() {
    console.log('Call1');
}

function call2() {
    console.log('Call2');
}

fooboo(true, call1, call2);
fooboo(false, call1, call2);
