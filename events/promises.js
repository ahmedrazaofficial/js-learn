const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, cryptography,network
    setTimeout(function () {
        console.log("async task is complete");
        resolve()
    }, 2000)
})

promiseOne.then(function () {
    console.log("promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve()
    }, 2000)
}).then(function () {
    console.log("task 2 complete");

})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "ahmed", email: "ahmedraza@gmail.com" })
    }, 2000)
})
promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Ahmed", password: "123" })
        } else (
            reject("ERROR: Something went wrong")
        )
    }, 2000)
})
promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then(function (username) {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));