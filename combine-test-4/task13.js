function multipleNumber(...num) {
    return {
        num: num,
        check: num.includes(50)
    }
}
console.log(multipleNumber(2, 3, 4, 5, 6));
