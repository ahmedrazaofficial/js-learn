//1.

const username = "anas_dev";
const email = "anas@gmail.com";
const age = 17;
const password = "anas12345";

if (!username) {
    console.log("Please provide a username");
}
if (!email) {
    console.log(`email not availabale`);
}
if (age < 18) {
    console.log("The user must be older than 18");
}
if (password.length < 8) {
    console.log("password less than 8 character");
}