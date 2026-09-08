//singleton
//object.create
//object.literals

const mySym = Symbol("key1")

const jsUser = {
    name: "ahmed",
    "full name": "syed ahmed raza",
    [mySym]: "key",
    age: 17,
    location: "pakistan",
    email: "ahmedgoogle.com",
    isLoggedin: "false",
    lastLoginDays: ["monday", "saturday"]
}
console.log(jsUser["email"]);
console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "ahmedchatgpt.com"
// Object.freeze(jsUser)  //freeze karna sa agy kuch bhi change nhi hota
jsUser.email = "ahmedraza.com"
console.log(jsUser);


jsUser.greeting = function () {
    console.log("hello js user");
}
jsUser.greetingTwo = function () {
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


