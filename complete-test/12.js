const dailyVisitors = [120, 250, 180, 320, 90, 400, 280];
let total = 0
for (let i = 0; i < dailyVisitors.length; i++) {
    const element = dailyVisitors[i];
    total = total + element

}
console.log(total);

let max = Math.max(...dailyVisitors)
console.log(max);

let add = 0
for (let i = 0; i < dailyVisitors.length; i++) {
    if (dailyVisitors[i] < 200) {
        add = add + 1
    }
}
console.log(add);
