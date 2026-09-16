//6.
function receiver(array) {
    let maximun = Math.max(...array)
    let minimun = Math.min(...array)
    return {
        maximun,
        minimun
    }
}

console.log(receiver([12, 45, 7, 89, 23]));