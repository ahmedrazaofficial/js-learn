//5.
let balance = 25000;
const withdrawal = 8000;
if (withdrawal && withdrawal <= balance) {
    // balance = balance - withdrawal;
    balance -= withdrawal;
    console.log(balance);
} else {
    console.log("Insufficient balance");
}