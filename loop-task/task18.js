const orders = new Map()
orders.set(101, "Pending")
orders.set(102, "Shipped")
orders.set(103, "Delivered")

orders.forEach((number, value) => {
    console.log(`Order ${value} : ${number}`)
})