let today = new Date()
console.log(new Date(today.setDate(today.getDate() - 7)).toDateString());