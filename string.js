
// - If n is not given, get the first element.
// - If n < 0, return the empty array.
// - If n > number of elements in the array, return the entire array
// 




firstN =  function(array, n) {
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

console.log(firstN([7, 9, 0, -2]));
console.log(firstN([],3));
console.log(firstN([7, 9, 0, -2],3));
console.log(firstN([7, 9, 0, -2],6));
console.log(firstN([7, 9, 0, -2],-3));

