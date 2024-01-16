// make regex

function checkString(text) {
    const regex = /a.{3,}b|b.{3,}a/; // Regex untuk mencari 'a' dan 'b' dengan jarak minimal 3 karakter

    return regex.test(text);
}

console.log(checkString("lane borrowed"));
console.log(checkString("barbarian"));
console.log(checkString("i am sick"));