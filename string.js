
// "- If n is not given, return the last element.
// - If n < 0, return the empty array.
// - If n >  number of elements in the array, return the entire array.
// " 



lastN =  function(array, n) {
    if (n < 0)
        return [];
    if (n == null) 
    return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0))  
};

console.log(lastN([7, 9, 0, -2]));	
console.log(lastN([7,9,0,-2],3));	
console.log(lastN([7, 9, 0, -2],6));	
