const response = {
    success: true,
    users: [
        { id: 1, name: "Ahmed", active: true },
        { id: 2, name: "Anas", active: false },
        { id: 3, name: "Ali", active: true }
    ]
};


if (response.success) {
    console.log("true");
} else {
    console.log("false");
}

let check = response.users.filter((users) => users.active === true); console.log(check);

response.users.forEach((users) => {
    if (users.active === true) {
        console.log(users.name);
    } else {
        console.log("error")
    }
});