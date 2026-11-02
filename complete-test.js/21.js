const subscriptions = [
    { user: "Ahmed", expiry: "2026-10-10" },
    { user: "Anas", expiry: "2026-11-15" },
    { user: "Ali", expiry: "2026-10-25" }
];
let currentDate = Date.now()

const expiredSubscriptions = subscriptions.filter((date) => new Date(date.expiry).getTime() < currentDate)

expiredSubscriptions.forEach((item) => console.log(item.user));