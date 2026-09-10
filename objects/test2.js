//1.
const obj = {}
obj.id = "123abc"
obj.name = "ahmed"
obj.age = 17
obj.isLoggedIn = false
console.log(obj);

//2.
const obj1 = {
    name: "ahmed",
    instead: {
        address: "alazam",
        city: "karachi",
        country: "pakistan"
    }
}
console.log(obj1.instead.city);
console.log(obj1.instead.country);

//3.
const student = { name: "Ahmed", age: 20 }
const course = { title: "JavaScript", duration: "3 months" }
const studentCourse = { ...student, ...course }
console.log(studentCourse);


//4.
const student1 = {
    name: "ahmed",
    age: 17,
    class: 11
}
const student2 = {
    name: "anas bhai",
    age: 22,
    class: 15
}
const student3 = {
    name: "ibrahim",
    age: 18,
    class: 12
}
const allStudents = { student1, student2, student3 }
console.log(allStudents);

//5.
const students = [
    {
        id: "ahmed123",
        name: "ahmed",
        email: "syedahmedgmail.com"
    },
    {
        id: "ibrahim123",
        name: "ibrahim",
        email: "ibrahim.com"
    },
    {
        id: "anas123",
        name: "ahmed",
        email: "anasbhai.com"
    }
]
console.log(students[1].name);
console.log(students[2].email);


//6.
const ownProperty = {
    name: "ahmed",
    age: 17,
    email: "syedahmedgmail.com",
    city: "karachi",
    isLoggedIn: true

}
console.log(Object.hasOwn(ownProperty, 'email'));


//7.
const mySelf = {
    name: "ahmed",
    age: 17,
    city: "karachi",
    isLoggedIn: true
}
console.log(Object.keys(mySelf));
console.log(Object.values(mySelf));
console.log(mySelf);

//8.
const user = {
    profile: {
        personal: {
            name: "ahmedraza",
            age: 17
        }
    }
}
console.log(user.profile.personal);


//9.
const obj2 = {
    name: "ahmed raza",
    email: "ahmedraza@gmail.com",
    messagePrint: function () {
        console.log(`my name is ${this.name} and my email id is ${this.email}`);

    }
}
obj2.messagePrint()


//10.
const obj3 = {
    id: "ahmed123",
    name: "ahmed",
    email: "syedahmedgmail.com",
    skills: ["javascript", "html", "ms word"],
    isLoggedIn: true
}
console.log(Object.keys(obj3));
console.log(obj3.skills[1]);
console.log(obj3.email);
console.log(obj3);









