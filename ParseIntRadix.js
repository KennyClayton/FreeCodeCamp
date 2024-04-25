// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-parseint-function-with-a-radix

//~ My comments in purple



function convertToInteger(str) {
    return parseInt(str, 2)
  }
  
  convertToInteger("10011");
  
  //~ using the radix of 2 tells the code "Hey, when you parse the string "10011" into an integer, we want it interpreted as a  BINARY number (base 2)." So this is what the code does:
  //~ From right to left...
  //~ binary position 0 is turned on with the 1 = Add 1
  //~ binary position 1 is turned on with the 1 = Add 2
  //~ binary position 2 is turned OFF with the 0 = DO NOT add 4
  //~ binary position 3 is turned OFF with the 0 = DO NOT add 8
  //~ binary position 4 is turned on with the 0 = Add 16
  
  //~ Total all Adds: 1 + 2 + 16 = 19