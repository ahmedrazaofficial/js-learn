//1.

const username = "anas_dev";
const email = "anas@gmail.com";
const age = 20;
const password = "anas12345";
if (username) {
    console.log(`${username}  logged in`);

} else {
    console.log(`username not availabale`);

} if (email) {
    console.log(`${email} logged in`);
} else {
    console.log(`email not availabale`);
}

if (age >= 18) {
    console.log(`${age} will be availabale`);
} else {
    console.log(`age less than 18`);
} if (password.length > 8) {
    console.log(`${password} logged in `);
} else {
    console.log(`password not found`);
}