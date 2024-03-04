let myfirst_name = "Hanna";
let mysecond_name = "Dolbik";
let str_Result = "Привет " + myfirst_name + " " + mysecond_name;

let isUpperCase = true;
for(let i = 0; i < 5; i++) {
    if (isUpperCase === true) {
        console.log(str_Result.toUpperCase())
    } else {
        console.log(str_Result.toLowerCase())
    }
    isUpperCase = !isUpperCase;
}