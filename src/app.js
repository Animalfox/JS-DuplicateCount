import duplicateCount from './duplicateCount.js';

console.log(duplicateCount("abc")); // 0 duplicates
console.log(duplicateCount("aabc")); // 1 duplicates "aa"
console.log(duplicateCount("aaabc")); // 1 duplicates "aaa"
console.log(duplicateCount("aabbc")); // 2 duplicates "aa" and "bb"
console.log(duplicateCount("aabbccccc")); // 3 duplicates "aa", "bb" and "ccccc"
