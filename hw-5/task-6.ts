let first_name = "Hanna";
let second_name = "Dolbik";
let strResult = "Привет " + first_name + " " + second_name;

let isUppercase = true;
for(let i = 0; i < 5; i++) {
    if (isUppercase === true) {
        console.log(strResult.toUpperCase())
    } else {
        console.log(strResult.toLowerCase())
    }
    isUppercase = isUppercase ? false : true;
}
