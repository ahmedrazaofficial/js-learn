//2.
const username = "anas_dev"
for (const naam of username) {
    if (naam == "_") {
        continue
    }
    console.log(naam);
}