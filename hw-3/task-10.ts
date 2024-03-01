let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let houldGoToWork = (key && documents && pen) && (apple || orange);
console.log(houldGoToWork);