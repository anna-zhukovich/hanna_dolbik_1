function getArray(arr: any[]): [any, any] {
    let elem2: any, elem3: any;

    if (arr.length >= 2) {
        elem2 = arr[1];
    } else {
        elem2 = 'bbb';
    }

    if (arr.length >= 3) {
        elem3 = arr[2];
    } else {
        elem3 = 'eee';
    }

    return [elem2, elem3];
}

const arr: any[] = ['a', 'b', 'c'];
const [elem2, elem3] = getArray(arr);
console.log(elem2, elem3);

const arr2: any[] = ['x', 'y'];
const [elem2_2, elem3_2] = getArray(arr2);
console.log(elem2_2, elem3_2);



const processArray = (arr2: any[]): [any, any] => {
    let elem2: any, elem3: any;

    if (arr2.length >= 2) {
        elem2 = arr2[1];
    } else {
        elem2 = 'bbb';
    }

    if (arr2.length >= 3) {
        elem3 = arr2[2];
    } else {
        elem3 = 'eee';
    }

    return [elem2, elem3];
};

const newarr: any[] = ['a', 'b', 'c'];
const [elem_2, elem_3] = processArray(newarr);
console.log(elem_2, elem_3); // Выводит второй и третий элементы массива

const arr3: any[] = ['x', 'y'];
const [elem_2_2, elem_3_2] = processArray(arr3);
console.log(elem_2_2, elem_3_2);