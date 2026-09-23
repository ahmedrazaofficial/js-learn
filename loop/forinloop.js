const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key);  // yah direct index batata ha 
    console.log(programming[key]);
}

const map = new Map()
map.set('PAK', 'Pakistan')
map.set('USA', 'United States Of America')
map.set('FR', 'France')
map.set('PAK', 'Pakistan')

for (const key in map) {
    console.log(key);
}   // jo iterable nhi hoti oss ko loop me nhi lekhha jaa skhta