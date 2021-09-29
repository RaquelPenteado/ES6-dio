var [apple, banana, orange, [tomato]] = [
    'Apple',
    'Banana',
    'Orange',
    ['Tomato']
];
console.log(apple, tomato);


var obj = {
    name: 'Celso',
    props: {
        age: 18,
        favColors: ['blue', 'pink']
    }
};
var { name: name2 } = obj;
var { props: { age: age2, favColors: [color1, color2] }} = obj;
console.log(color2, color1);