let obj = {
    name: "Ahmed",
    city: "karachi",
    skills: ["java", "phyton", "html", "css"]
}
function changes(obj) {
    return {
        name: obj.name,
        city: obj.city,
        skills: obj.skills[1]
    }
}
console.log(changes(obj));
