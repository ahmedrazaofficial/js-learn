//1.

const username = "anas_dev";
const email = "anas@gmail.com";
const age = 20;
const password = "anas12345";
if (username && email) {
    console.log(`${username}  logged in`);
    console.log(`${email} logged in`);


} else {
    console.log(`${username} does not logged in`);
    console.log(`${email} does not logged in`);
}

if (age >= 18 && password < 8) {
    console.log(`${age} more than 18`);
    console.log(`${password} less than 8 charcter`);

} else {
    console.log(`${age} less than 18`);
    console.log(`${password} more than 8 charcter`);
}