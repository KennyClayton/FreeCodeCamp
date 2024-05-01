// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
//All comments here are my own Color-coded by stack call number
//~ 4/30/2024 at 10:52pm close to ending work on this. Came close to solution before looking at the hint and solution 1 provided by FreeCodeCamp. So below I commented all of solution 1 so I understand it

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) { //if 9 < 6...8 < 6...7 < 6...6 < 6...5 < 6 YES...
      return []; // start with empty array before calling the stacked functions (Last in, first out)
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1); // when these functions are stacked, then begin unwinding, the code will pull one function from the stack, then go to this next line of code to push the endNum value onto the numbers array....and then the code will go to the stack again to pull off the next function on top....then will go down to push again...etc
      numbers.push(endNum);
      return numbers;
    }
  }

  console.log(rangeOfNumbers(6, 9));
  console.log(rangeOfNumbers(1, 20));
  console.log(rangeOfNumbers(26, 59));
  

  //~ the below stack has been built through recursion with the following functions (top function was last on):
    //! rangeOfNumbers(6, 9 - 1) note: this is the first function added to the bottom of the stack...this function gets resolved LAST
    //$ rangeOfNumbers(6, 8 - 1) note: this is the second function added to the stack, on top of first one...this function gets resolved FOURTH
    //^ rangeOfNumbers(6, 7 - 1) note: this is the third function added to the stack, on top of the second one...this function gets resolved THIRD
    //* rangeOfNumbers(6, 6 - 1) note: this is the fourth function added to the stack, on top of the third one...this function gets resolved SECOND
    //? rangeOfNumbers(6, 5 - 1) note: this is the fifth function added to the stack, on top of the fourth one...this function gets resolved FIRST
    //@ THIS IS OUR FIRST RETURN. When rangeOfNumbers function runs with 5 as the value of startNum, the initial if statement is true, which means the return statement will give us an empty array. Again, since 5 is less than 6, the code will run the initial return and give us an empty array [] as our first return
    // so start building the return with an empty array [] and let's tally the returns as we go...
//@-------- RETURN TALLY [] --------//
  //? now start unwinding (calling and resolving) the stacked functions...
    //? remember....last in, first out...so what was the last function added to the stack? rangeOfNumbers(6, 5 - 1) was the last added. So let's resolve it...
    //? "rangeOfNumbers(6, 5 - 1)" gets assigned as the value of "numbers" where 6 is the startNum value and 5 was the endNum value...
    //? the next line of code that will run is numbers.push(endNum)...endNum is 5, so...
      //? numbers.push(endNum) resolves to numbers.push(5) since 5 was the value of endNum at this time
      //? return was an empty array [] but now has the number 5 added to the array, like this [5]
//@-------- RETURN TALLY [5] --------//
  //* now keep unwinding the stack. What is the next function on the top of the stack? "rangeOfNumbers(6, 6-1)". So let's resolve it...
    //* "rangeOfNumbers(6, 6 - 1)" gets assigned the value of "numbers" where 6 is the startNum value and 6 was also the endNum value...
    //* the next line of code that will run is numbers.push(endNum)...endNum is 6, so...
      //* numbers.push(endNum) resolves to numbers.push(6) since 6 was the value of endNum at this time
      //* return tally shows [5] previously, but now we have pushed 6 into the array
//@-------- RETURN TALLY [5, 6] --------//
  //^ now keep unloading the stack. Next in line would be rangeOfNumbers(6, 7 - 1). So let's resolve it...
    //^ "rangeOfNumbers(6, 7 - 1)" gets assigned the value of "numbers" where 6 is the startNum value and 7 was the endNum value...
    //^ the next line of code that will run is numbers.push(endNum)...endNum is 7, so...
      //^ numbers.push(endNum) resolves to numbers.push(7) since 7 was the value of endNum at this time
      //^ return tally shows [5, 6] previously, but now we have pushed 7 into the array
//@-------- RETURN TALLY [5, 6, 7] --------//
    //$ now keep unloading the stack. Next in line would be rangeOfNumbers(6, 8 - 1). So let's resolve it...
    //$ "rangeOfNumbers(6, 8 - 1)" gets assigned the value of "numbers" where 6 is the startNum value and 8 was the endNum value...
    //$ the next line of code that will run is numbers.push(endNum)...endNum is 8, so...
      //$ numbers.push(endNum) resolves to numbers.push(8) since 8 was the value of endNum at this time
      //$ return tally shows [5, 6, 7] previously, but now we have pushed 8 into the array
//@-------- RETURN TALLY [5, 6, 7, 8] --------//
    //! now keep unloading the stack. Next in line would be rangeOfNumbers(6, 9 - 1). So let's resolve it...
    //! "rangeOfNumbers(6, 9 - 1)" gets assigned the value of "numbers" where 6 is the startNum value and 9 was the endNum value...
    //! the next line of code that will run is numbers.push(endNum)...endNum is 9, so...
      //! numbers.push(endNum) resolves to numbers.push(9) since 9 was the value of endNum at this time
      //! return tally shows [5, 6, 7, 8] previously, but now we have pushed 9 into the array
//@-------- RETURN TALLY [5, 6, 7, 8, 9] --------//
 // All returns have completed and the function is done  