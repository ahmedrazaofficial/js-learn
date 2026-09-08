const gentsNames = ["ahmed", "anas", "ibrahim"]
const ladiesNames = ["api", "kainat", "mahnoor"]
// gentsNames.push(ladiesNames)
// console.log(gentsNames);  //array koi bhi data leleta ha yah array ko bhi element leliya
// console.log(gentsNames[3][0]);

const allNames = gentsNames.concat(ladiesNames)
console.log(allNames);  //concat yah array ko combine kardeta ha mila deta ha 

const combineNames = [...gentsNames, ...ladiesNames]
console.log(combineNames);  //isko spread kheta ha yah zyada tar use hota ha 


const anotherArray = [1, 2, 3, 4, [5, 6, 7], 8, [7, 8, [8, 9, 7]]]
const newAnotherArray = anotherArray.flat(1)
console.log(newAnotherArray);

console.log(Array.isArray("ahmed")); //yah array nhi ha string ha isliya false diya
console.log(Array.from("ahmed"));
console.log(Array.from({ name: "ahmed" }));


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));