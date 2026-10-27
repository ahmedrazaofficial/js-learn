const correctPassword = "js12345";
const attempts = ["wrong123", "hello123", "js12345"];
let isLocked = false;

for (const attempt of attempts) {
    if (attempt === correctPassword) {
        isLocked = false;
        break;
    } else {
        isLocked = true;
    }
}
console.log(isLocked ? "Locked" : "Password successful");