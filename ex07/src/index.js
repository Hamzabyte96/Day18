let numberArray = new Set([9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5]);
let uniqueArray = []

for (let set of numberArray) {
    uniqueArray.push(set);
}
uniqueArray.sort((a,b) => a-b)
console.log(uniqueArray);
module.exports = { numberArray, uniqueArray };
