//13.
const countries = new Map()
countries.set("PK", "Pakistan")
countries.set("TR", "Turkey")
countries.set("UK", "United Kingdom")
countries.set("US", "United States")

for (const [key, countryName] of countries) {
    console.log(key, " :- ", countryName);
}