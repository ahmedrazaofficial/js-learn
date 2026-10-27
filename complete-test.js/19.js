//19.
const books = [
    { title: "JavaScript Basics", genre: "Programming", price: 1500, year: 2022 },
    { title: "History of Pakistan", genre: "History", price: 2000, year: 2018 },
    { title: "Advanced JavaScript", genre: "Programming", price: 2500, year: 2025 },
    { title: "World History", genre: "History", price: 1800, year: 2023 }
];

let newBook = books.filter((book) => book.genre == "Programming" && book.year > 2020)
console.log(newBook);

let calculate = newBook.reduce((acc, item) => acc + item.price, 0)
console.log(calculate);