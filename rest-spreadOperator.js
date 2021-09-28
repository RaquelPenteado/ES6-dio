function sum(...args){
    return args.reduce((acc,value) => acc + value, 0);
};

console.log(sum(5,5,5,5));



const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum2 = (...rest) => {
    // return multiply.apply(undefined,rest);
    return multiply(...rest);
};

console.log(sum2(5,5,5,2));



const string = 'DIO';
const arr = [1,2,3,4];

function logArgs(a,b,c) {
    console.log(a,b,c);
}
// logArgs(...arr);
// logArgs(...string)
const arr2 = [...arr,5,6,7];
const arr3 = [...arr2,8,9,10];
console.log(arr3);



const obj = {
    teste: 123
};

const obj2 = {
    ...obj,
    teste2: 'hello'
};

const objMerged = {
    ...obj,
    ...obj2
};

console.log(objMerged);