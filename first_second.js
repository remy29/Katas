// use math.max to find largest number in array
// use .splice to remove math.max from array
// use math.max again to determine new max
sumLargestNumbers = (data) => {
  const sumA = Math.max(...data); // find's highest number in the array and assigns it to variable sumA
  const dataClone = [...data]; // creates clone of array to avoid muting original
  dataClone.splice(dataClone.indexOf(sumA), 1); // removes sumA from cloned array
  const sumB = Math.max(...dataClone); // finds 'new' highest number and assigns it to variable sumB
  return sumA + sumB; // self explanatory 
};

console.log(sumLargestNumbers([1, 10, 33, 6, 44]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

