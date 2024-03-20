function processArray(arr: any[]): { elem2: any, elem3: any } {
    const [, elem2 = 'bbb', elem3 = 'eee'] = arr;
    return { elem2, elem3 };
}


//const processArray = (arr: any[]): { elem2: any, elem3: any } => {
//   const [, elem2 = 'bbb', elem3 = 'eee'] = arr;
//   return { elem2, elem3 };
//};


const array: any[] = [14]; 
const { elem2, elem3 } = processArray(array);
console.log(elem2, elem3); 