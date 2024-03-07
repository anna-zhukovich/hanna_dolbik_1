function  getCallBack(boolValue: boolean, foo: () => void, boo: () => void): void {
    boolValue ? foo() : boo();
}

function call1() {
    console.log('Call1');
}

function call2() {
    console.log('Call2');
}

getCallBack(true, call1, call2);
getCallBack(false, call1, call2);
