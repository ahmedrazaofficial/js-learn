const naam = "ahmed"
const repoCount = 50

// console.log(naam + repoCount + " values ");  // purana ha iss zamana me koi psnd nhi karta esa lekhna

console.log(`hello my name is ${naam} and my repocount is ${repoCount}`);


const gameName = 'ahmed-hc'
console.log(gameName);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));console.log(gameName[6]);  // dono 1 he kam karta ha letter batata ha konsa kah per ha
console.log(gameName.indexOf('e')); // yah alphabet konsa number per ha yah batata ha


const newString = gameName.substring(0, 7)  // ap jo value daloga woh count nhi karega oss se 1 pehla tk count karega
console.log(newString);

const anotherstring = gameName.slice(3, -2)  // substring me negative value kam nhi karti sirf slice me kam karti ha
console.log(anotherstring);

const newStringOne = "     ahmed      "
console.log(newStringOne);
console.log(newStringOne.trim());  //trim space khtm kardeta ha

const url = "https://ahmed.com/ahmed%20bukhari"
console.log(url.replace('%20', '-')); //value me sa koi word change krna ho toh replace karta ha
console.log(url.includes('ahmed'));  //kyuka yah link ka ander ha isliya true diya
console.log(url.includes('anas'));  //kyuka esa work link ka ander nhi ha toh false diya

console.log(gameName.split('-')); // yah takseem kardeta ha

console.log(url.startsWith("https"));
console.log(url.endsWith(".com"));