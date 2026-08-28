////////////////////   ARRAY   ////////////////////

const arr = [0, 1, 2, 3, 4, 5, 6]
console.log(arr);

const arr2 = ["ahmed", "anas", "doremon"]
console.log(arr2);

const num = new Array(1, 2, 3, 4, 5)
console.log(num[0], num[3]);

///////////////   ARRAY  METHOD   /////////////

arr.push(7)                    //push number add kardeta h 
arr.push(8)
arr.pop()                      //yah last wala number remove kardeta ha
arr.unshift(10)                // unshift use karna se start me woh wala number ajata ha
arr.shift()                   // yah shuru ka number remove kardeta ha 
console.log(arr);
console.log(arr.includes(4));   //yah batata ha iss me yah number ha yah nhi ha 
console.log(arr.indexOf(120));   //yah value exits nhi krti isliya -1 diya ha
console.log(arr.indexOf(3));     //yah batata ha konsa index per ha

const newarray = arr.join()
console.log(arr);
console.log(newarray);     //isko string me convert bhi krdiya or sqaure bracet bhi hata de


////////////////  SLICE OR SPLICE  /////////////////////////    
console.log("A", arr);

const myn = arr.slice(0, 4)
console.log(myn);
console.log("b", arr);
const myn2 =arr.splice(1,4)
console.log("c", arr);
console.log(myn2);



