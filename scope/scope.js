// var c =300
let a = 300

//or jo yah bahir ha yah ha global scope

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER:", a);

}  //yah jo if ka ander lekha ha yah sub ha block scope

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "ahmed"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()


}
// one()

if (true) {
    const username="ahmed"

if (username==="ahmed") {
    const website = "insta"
    // console.log(username+" "+website);
}
// console.log(website);
}
// console.log(username);

////////////////////////////////  INTERESTING  ////////////////////////////////////


function addone(num){
   return num+1
} 
console.log(addone(5));

const addTwo=function(num){
    return num+2
}
 console.log(addTwo(5));


