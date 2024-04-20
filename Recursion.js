//! Recursion problem verbatim from FreeCodeCamp at https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion
// Recursion can act as a replacement for loops
// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

// multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:
function multiply(arr, n) { // a function that takes an array as a parameter and a number as another parameter
    let product = 1 // "create the product of those elements" ... means we need to generate a number...whicih means we need a variable to hold that number
    for (let i = 0; i < n;  i++) { // loop through a series of numbers ... those numbers will be inside the array that gets passed into this function
        product *= arr[i]; // the task is to multiply an array of numbers. This is how we do that. *= operator does two things: it multiplies existing value of product (1) x whatever number is at index 0 of the array (1)....so the first loop it multiplies 1 x 1
    }
    return product; 
}
 //! Me giving a sample array and n value
console.log(multiply([1,2,3,4,5,6,7,8,9,10], 10))

// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
// The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.
// Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.



//* BEGIN ATTEMPT BELOW


// Starting code and Notes
function sum(arr, n) {
    // Only change code below this line
  
    // Only change code above this line
  }
  
  //multiply(arr, n) is the same as multiply(arr, n-1) * arr[n-1]
  //Break it down:
  //let's use these parameters: arr is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and n = 7
  //arr[n-1] 
        // if n is 7, then we have arr[7-1]
        // arr[6] 
        // arr[6] means multiply each element by the next element, up to the 5th indexed element of the array (6th total)
        // so multiply(arr, 6) would give us this math problem: 1 x 2 x 3 x 4 x 5 x 6
        // 
  //then the function would multiply 1 x 2 x 3 x 4 x 5 x 6)...ie - up to the 6th element (which would be the number 6)
  //and then youd have the multiply function multiplied by 40
  
  // so effectively, this function counts down starting at n (7 in this example)
  // if 7 <= 0 then return 1....well 7 is not less than or equal to 0....so instead, return the same function but using one less than n (one less than 7 is 6)....
  // this results in returning the multiply function using the array and 6 as parameters and multiplying that by whatever number sits in the 6th spot of the array, which is 20.



  //& It's like saying, if the input is 0, then return 1. But if the input is anything else, go back to the beginning of this function and try the initial "if" statment again with a different number that is one less than the user's input. 
    //^ So let's say the user entered "7" ... the initial "if" statement will fail and move on to the return statement. The return statement runs which says "run this function again using the number 6 and multiply that by the sixth element in the array". 
    //^ This is where I kept getting confused. Where in the function do we actually ask to multiply? Well, right there at the multiplication operator. But what happens to the integer we got from arr[n-1]? The answer: it will get multiplied by the other integers that get resolved from the function running again.


//* BEGIN THE ADDITION PROBLEM ITSELF

function sum(arr, n) {
    // Only change code below this line
  if (n <= 0) {
    return 0;
  }
  else {
    return sum(arr, n - 1) + arr[n - 1]; // if the previous condition fails, run this function again AND ADD 
    // sum([2, 3, 4, 5], 2) + arr[2] 
      // this results in the 2-indexed integer (4) being stored for addition...and the function running again
    // sum([2, 3, 4, 5], 1) + arr[1]
      // this results in the 1-indexed integer (3) being stored for addition...and the function running again
    // sum([2, 3, 4, 5], 0) + arr[0]
      // this results in the 0-indexed integer (2) being stored for addition...and the function NOT running again since n = 0 and, as stated in the function, if n <= 0, then return 0 and exit the function
  }
  // at this point the sum function has returned the addition of 4 and 3 and 2 which = 9
  }
    // Only change code above this line
  
  
  //multiply(arr, n) is the same as multiply(arr, n-1) * arr[n-1]
  //arr[n-1] means if n is 7, multiply up to the 6th element of the array
  //so if the given array is [1,2,4,8,10, 20, 40, 100]
  //then the function would multiply 1 x 2 x 4 x 8 x 10 x 20)...ie - up to the 6th element would be 20
  //and then youd have the multiply function multiplied by 40
  
  // so effectively, this function counts down starting at n (7 in this example)
  // if 7 <= 0 then return 1....well 7 is not less than or equal to 0....so instead, return the same function but using one less than n (one less than 7 is 6)....
  // this results in returning the multiply function using the array and 6 as parameters and multiplying that by whatever number sits in the 6th spot of the array, which is 20.



  //@ ChatGPT version of comments actually help me get a more complete understanding. See below:
  function sum(arr, n) {
    // Base case: if n is less than or equal to 0, return 0
    if (n <= 0) {
      return 0;
    } else {
      // Recursive call: return the sum of the current element arr[n - 1] and the result of the recursive call with n decremented by 1
      return sum(arr, n - 1) + arr[n - 1]; 
      // For example:
      // sum([2, 3, 4, 5], 2) + arr[2] 
      // This results in the value of arr[2] (4) being added to the result of the recursive call.
      // sum([2, 3, 4, 5], 1) + arr[1]
      // This results in the value of arr[1] (3) being added to the result of the recursive call.
      // sum([2, 3, 4, 5], 0) + arr[0]
      // This results in the value of arr[0] (2) being added to the result of the recursive call.
      // When n reaches 0, the function stops recurring and returns the sum of all elements up to the index n.
    }
  }
  