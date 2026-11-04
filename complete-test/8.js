//8.
const customer = {
    name: "Anas",
    email: "anas@gmail.com",
    city: "Karachi",
    isVerified: false
};
customer.city = "lahore"
customer.isVerified = true
console.log(customer);
console.log(Object.keys(customer));
console.log(Object.values(customer));