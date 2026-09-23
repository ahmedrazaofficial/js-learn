const email = "anas@gmail.com"
for (const letter of email) {
    if (letter == "@") {
        break
    }
    console.log(letter);
}