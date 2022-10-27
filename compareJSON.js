var obj1 = { name: 'Person 1', age: 5 }
var obj2 = { age: 5, name: 'Person 1' }


if (obj1.age === obj2.age && obj1.name === obj2.name) {
    console.log('Both are same Person');
} else {
    console.log('Both are different Person');
}