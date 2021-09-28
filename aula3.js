var prop1 = 'DIO';

var obj = {
    // prop1: prop1
    prop1
};

console.log(obj);



var obj2 = {
   sum(a,b = 1){
       return a + b;
   }
};

console.log(obj2.sum(10));



var propName = 'test';
var obj3 = {
    [propName]: 'prop value'
};

console.log(obj3)