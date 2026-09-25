//2.
const marks = [45, 78, 32, 90, 66, 55, 28]
let final = marks.filter((item) => (item >= 50))
console.log(final);

/*   ************************        OR      ***************************   */


marks.forEach((item) => {
    if (item >= 50) {
        console.log(item);
    }
})