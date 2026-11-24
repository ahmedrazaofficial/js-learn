setTimeout(function () {
    console.log("ahmed");
}, 2000)

const sayAhmed = function () {
    console.log("ahmed");
}
setTimeout(sayAhmed, 2000)
// same method

const textChange = function () {
    document.querySelector('h1').innerHTML = "Syed Ahmed Raza"
}
// setTimeout(textChange, 2000)


const changeMe = setTimeout(textChange, 2000)
document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(changeMe)
    console.log("stopped");

})