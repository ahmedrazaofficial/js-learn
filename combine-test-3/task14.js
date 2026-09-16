//14.
let bankAccount = {
    accountHolder: "ahmed",
    balance: 20000,
    accountNumber: 1234567890
}
function calculation(bankAccount) {
    return bankAccount.balance + 1000
}
console.log(calculation(bankAccount));