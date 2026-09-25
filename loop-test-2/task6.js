const prices = [1000, 2000, 3000, 4000, 5000]
const newPrices = prices
    .map(price => price + (price * 10 / 100))
    .filter(price => price >= 3000)
console.log(newPrices)