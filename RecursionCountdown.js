// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown

// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

//* IMPORTANT: Normally, we see an if else statement and think one or the other condition is met. In a recursive function you are GUARANTEED to meet both conditions. In fact, a recursive function relies on the initial if statement as its base case, which is what stops the recursion/loop. In a recursive function, the if statement (or conditional statement) WILL RUN. I kept thinking it never runs because the condition is never met. But it actually is the last part of the function to run.
//* IMPORTANT: In a recursive function, the if statement (or conditional statement) returns the first piece of the function's return...whether it is an empty array or whatever

// //~ What is the purpose of this function? To return an array of consecutive integers from n down to 1
// function countdown(n){
//     return n < 1 ? [] : [n, ...countdown(n - 1)];
//  }

//  //~ Rewriting to understand
//  function countdown(n) { //~ let's count down from 5 (n)
//     return n < 1 ? [] //~ If n is less than one, give me an empty array because nothing can be added to the array because the whole purpose was to count down consecutively to 1. Since anything below 1 is already less than one, we can't count down from that, so nothing can go into the array. Only numbers 1 and above can.
// : //~ Otherwise, if n is any other number besides 0....
// [n, ...countdown(n - 1)]; //~ then using that provided number n, concatenate the results of the countdown function using the next number lower from previous n. So if previous n was 5, run the function again with 4 and then conactenate that to the array which was [5]....so then it would be [5], [4] being concatenated into a single array of [5, 4]
// }

// function countdown(n) { //~ n = 10
//     return n < 1 ? [] //~ false, so move on to next line
// : //~ otherwise, do this...
// [n, ...countdown(n - 1)]; //~ [5, then run it back with countdown(4)]
// }



// //$ 4/29/2024 at 6:06pm PRACTICING MORE...
// //~ assume n = 10
// function countup(n) {
//     if (n < 1) { //~ 10 is not less than n...go to else statement
//       return [];
//     } else {
//       const countArray = countup(n - 1); //~ countArray is a declared variable that is initialized immediately with the value of countup(9)
//       //! WHAT HAPPENS NEXT? does code go down to use push method on the value of countup(9)? Or does the below line of code not run yet?
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(10));


//   // From: https://www.youtube.com/watch?v=7YyOTYSvptg
//   //~ practice with factorial. This was surprisingly easy just now. Used ternary operators. Initially was getting the initial condition met bc I had single equals instead of triple. Corrected that and then figured out I needed a 1 after the question mark because that is the base case and all returns following will rely on it. But in what way? All following returns will multiply by each other, but that begins with the base case 1. So if the given number is 1, then return a 1 so we can multiply the next return by that one.

//   function factorial(num) {
//     return num === 1 ? 1 : num * factorial(num - 1)
//   }

//   console.log("Last one: ", factorial(3));


//   //~ practice with visualizing
//   function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));



  //~ ATTEMPT 4/30/2024 WORKED!!! It was not accepted by freecodecamp but it does function as intended
function countdown(n){ // so if n = 10 right here...
    if (n < 1) { //...loop one this is false so it goes to else....
      return []; // when recursion ends with 0 being less than 1, we get an empty array, then start the last function call that was placed on top of the stack of function calls...and when that function runs, push it to the countArray
    } else { //...
    const countArray = countdown(n - 1); // if n = 10, then the countdown(9) function is stacked, then countdown(8)...etc. 
    countArray.push(n); //... this line first runs when countdown(1) function is popped off the top of the stack and 1 is pushed onto the countArray Array inside of the brackets we got from the initial condition's return when 0 was found to be less than 1....then the code goes back to the stack, pops off countdown(2) and pushes 2 into the countArray Array so it now is [1, 2]...etc until the last function that was stacked gets resolved, which would be countdown(9) which gives us [1, 2....9] as our array
    return countArray; //...NOW return the array, which is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
  }

  console.log(countdown(10));
  

  //~ VERSION FROM FREECODECAMP'S SOLUTIONS
  function countdown(n){ //~ assume n = 10
      return n < 1 ? [] : [n, ...countdown(n - 1)]; //~ if (once) 0 is provided, give an empty array. Otherwise give me an array starting with 10, then successively place the value of n into this array as the value of n is decremented with each recursion.
    }
    console.log("FreeCodeCamp's Solution: ", countdown(5));