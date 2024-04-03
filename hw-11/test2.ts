const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Промис выполнен");
    }, 2000);
  });


  promise2.then((data) => {console.log(data)});