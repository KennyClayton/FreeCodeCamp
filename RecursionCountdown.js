// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown

// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

//~ What is the purpose of this function? To return an array of consecutive integers from n down to 1
function countdown(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
 }

 //~ Rewriting to understand
 function countdown(n) { //~ 
    return n < 1 ? [] //~ If n is less than one, give me an empty array because nothing can be added to the array because counting the whole purpose was to count down consecutively to 1. Since anything below 1 is already less than one, we can't count down from that, so nothing can go into the array. Only numbers 1 and above can.
: //~ Otherwise, if n is any other number besides 0....
[n, ...countdown(n - 1)]; //~ then using that provided number n, concatenate the results of the countdown function using the next numebr lower from previous n. So if previous n was 5, run the function again with 4 and then conactenate that to the array which was [5]....so then it would be [5], [4] being concatenated into a single array of [5, 4]
}