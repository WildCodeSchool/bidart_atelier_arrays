const intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumArray = [];
// const reverseArray = intArray.reverse();

// console.log(reverseArray);

for (let i = 0; i < intArray.length; i++) {
   for (let j = 0; j < newArray.length; j++) {
      if (i === j) {
         sumArray.push(intArray[i] + newArray[j]);
      }
   }
}
console.log(sumArray);
