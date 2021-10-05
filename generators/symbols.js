const uniqueId = Symbol('hello');
const obj = {
    [uniqueId]: 'hello'
};

console.log(obj);



const arr= [1,2,3,4]
const str = 'DIO'
const it = arr[Symbol.iterator]();
for(var i in str){
    console.log(it.next());
}



const obj2 = {
    value: [1,2,3,4],
    [Symbol.iterator]() {
        let ind = 0;

        return {
            next: () => {
                ind++
                return {
                    value: this.value[ind - 1],
                    done: ind > this.value.length
                };
            }
        };
    }
};

const it2 = obj2[Symbol.iterator]()

const arrtest = [...obj2];
console.log(arrtest);


