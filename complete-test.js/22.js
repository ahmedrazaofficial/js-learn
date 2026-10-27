const response = {
    success: true,
    users: [
        { id: 1, name: "Ahmed", active: true },
        { id: 2, name: "Anas", active: false },
        { id: 3, name: "Ali", active: true }
    ]
};


if (response.success) {
    const activeUsers = response.users.filter(user => user.active === true);
    activeUsers.forEach(user => console.log(user.name));
} else {
console.log("Something went wrong!");

}
