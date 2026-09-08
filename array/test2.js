//1.
const names=["anas","ahsan","ahmed","ibrahim","sarim"]
console.log(names[0],names[2]);

//2.
const numbers=[1,2,3,4,5,6,7]
numbers.push(8,10)
numbers.pop()
console.log(numbers);

//3.
const allNames=["anas","ahsan","ahmed"]
allNames.unshift("ibrahim")
allNames.shift()
console.log(allNames);

//4.
const allNumbers=[1,2,3,4,5,50,40]
console.log(allNumbers.includes(50),allNumbers.indexOf(50));

// //5.
const array1=[10, 20, 30, 40, 50, 60]
console.log(array1.slice(2,5));
console.log(array1);




// //6.
const array=[1, 2, 3, 4, 5, 6]

const arr=array.splice(1,3)
console.log(arr);






//7.
// const boys=["anas","ahsan","ahmed"]
// const girls=["jaweriya","kainat","mahnoor"]
// console.log(boys.concat(girls));

// //8.
// const boy=["anas","ahsan","ahmed"]
// const girl=["jaweriya","kainat","mahnoor"]
// console.log([...boy,...girl]);

// //9.
// const num=[1, 2, [3, 4], 5, [6, 7]]
// console.log(num.flat(1));


// //10.
// const naam="ahmed"
// console.log(Array.from(naam));
// price1=100
// price2=200
// price3=300
// console.log(Array.of(price1,price2,price3));


