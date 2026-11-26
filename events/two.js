const sayDate = (function name(str) {
    console.log(str, Date.now());
})
const clearIntervalID = setInterval(sayDate, 1000, "ahmed")
// setInterval yah non stop print karta rehta ha    

clearInterval(clearIntervalID)  //clearInterval yah print karna band kardega 


let startPrint;
const startPrinting = function () {
    startPrint = setInterval(sayDate, 1000, "Ahmed Raza")
}
document.getElementById('start').addEventListener("click", startPrinting)

const stopPrinting = function () {
    clearInterval(startPrint)
}
document.getElementById('stop').addEventListener("click", stopPrinting)