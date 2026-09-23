//  for of

// [ "" , "" , ""]
// [ {} , {} , {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    if (greet === " ") {
        continue;
        // break;
    }
    console.log(greet);
}

// maps

const map = new Map()
map.set('PAK', 'Pakistan')
map.set('USA', 'United States Of America')
map.set('FR', 'France')
map.set('PAK', 'Pakistan') //sirf 1 bar use hoti ha bar bar nhi hoti

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, value);
// }         //   its not iterable