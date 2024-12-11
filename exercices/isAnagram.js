function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    if (s1 === s2) {
        return true;
    }

    const sort1 = s1.split("").sort().join();
    const sort2 = s2.split("").sort().join();

    return sort1 === sort2;
}

console.log(isAnagram("silent", "listen"));
console.log(isAnagram("silent", "silent"));
console.log(isAnagram("poejpzov", "silent"));
console.log(isAnagram("poejpz", "silent"));