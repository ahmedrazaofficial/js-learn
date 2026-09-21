const user = {
    username: "ahmedraza",
    email: "ahmedraza@gmail.com",
    isLoggedIn: true
}
if (user.isLoggedIn && user.email) {
    console.log(`check userLogged ${user.isLoggedIn} and my email id is ${user.email}`);
} else {
    console.log("user is failed");
}