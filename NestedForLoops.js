// From https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops

function multiplyAll(arr) {
    let product = 1; // initialize the product variable at 1 so we have something to multiply against when the loops start...
    // Only change code below this line
  for (let i = 0; i < arr.length; i++) { // "let" us start at zero and count upwards by one each loop
    for (let j = 0; j < arr[i].length; j++) //...now inside the second set of arrays, "let" us start at zero indexed array (first one) and count up by one each loop
    { //...do this inside the sub-array....multiply all of its integers together
    // product of array 1 x product of array 2 x product of array 3 x however many arrays
    //? how do i get product of array 0? and then successive arrays? 
      // array zero contains all arrays, so go inside of that array first with "arr[i]""...then, once inside, go into the array indexed zero inside of that room by adding "[j]" to the end.....then, multiply together all numbers in that room too...
      product *= arr[i][j]; // multiply product x array[0][0], which is 1 x 2...then assign that value to "product", which would be 2.....then loop again which would be: multiply product (which is now 2) x the next array's product of 3 x 4 (which is 12)...so 2 x 12 = 24.... then store that value pf "24" in "product" variable....and loop again.....etc....and results will be 5040
    }
  }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  