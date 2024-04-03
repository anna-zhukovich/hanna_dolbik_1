const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation succeeded!");
    }, 2000);
  });
  
  promise1.then((result) => {console.log(result); return result;})
          .then((result) => {console.log(result)});

function anna() {
  console.log('hello');
  return 'test';
}
const result1 = anna();
console.log('jiuhuhkh', result1);