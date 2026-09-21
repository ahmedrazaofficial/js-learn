const user = {
    username: "ahmedraza",
    password: "ahmed123",
    balance: 200
}
if (user.username && user.password && user.balance > 1000) {
    console.log("Access granted");
} else {
    console.log("not access");
}