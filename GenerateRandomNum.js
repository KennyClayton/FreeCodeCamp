// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range

// Generate Random Whole Numbers within a Range
// You can generate a random whole number in the range from zero to a given number. You can also pick a different lower number for this range.

// You'll call your minimum number min and your maximum number max.

// This formula gives a random whole number in the range from min to max. Take a moment to read it and try to understand what this code is doing:

// Math.floor(Math.random() * (max - min + 1)) + min
// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.


// test case min is 10 and max is 20 
function randomRange(myMin, myMax) {
        if (myMin < 1) {
            return Math.floor(Math.random() * (myMax - myMin)) + myMin ;
        }
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin ;
  }
  
  console.log(randomRange(10, 20))
  
  
//~ SECOND WAY TO CODE THIS WHERE I CAN SEE THE RANDOM NUMBER THAT GETS GENERATED
  function randomRange(myMin, myMax) {
      randomNum = Math.random();
      console.log(randomNum)
      return Math.floor(randomNum * (myMax - myMin + 1)) + myMin ;
    }
    
    console.log(randomRange(10, 20))
    console.log(randomRange(0, 20))


//~ THIRD WAY THAT STILL WORKS FOR FREECODECAMP
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}


  //generate a random whole number. Below will give us a random number (rounded down) btwn 0 and 9
  //~ Math.floor(Math.random() * 10)
    //Notice that the 10 is me MANUALLY limiting the results (limiting the possibilities) of the return to a number less than 10. So if the randomly generated decimal is .5, I can control the return to give me a number less than 10 by multiplying by that maximum number of 10.
  //Build off of that now...
  //~ Math.floor(Math.random() * (max - min + 1)) + min
    //Notice that we can now limit the results CONDITIONALLY based on input from any user, instead of hard-coding a number like 10. How? We replace the 10 with a variable. In this case, instead of limiting the results to under 10, we can use the min and max veriables. We bracket the results so the result lands between two numbers (the max and the min). If 50 is max, 40 is min, the difference is 10. So the results can only land within TEN possible numbers between 40 and 50. 
    //So why add the one? Because we are going to round down in the event of the result being a decimal. For example, if the randomly generated decimal was .61 and we used 50 max 40 min....Then we'd have .61 x 10 for a result of 6.1 so if we add one to that for 7.1, then we can round down to an even 7. 
    //Wait a minute, the result is 7? I thought it was supposed to be between the max of 50 and min of 40....yes! Which is why the function then adds the minimum to 7....so 40 + 7 is the return.
  
  
    //REMEMBER: The random number that gets generated is a DECIMAL that is below 1. 
  