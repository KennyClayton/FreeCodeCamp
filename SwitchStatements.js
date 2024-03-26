// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/counting-cards


//^ Counting Cards
//* LEARNED: No need to enter cases 7-9 because we don't need to chaneg the output for those situations.
//* Try to think of the user sitting behind the parameter and inserting whatever card they want to try. They'll place a "2" card inthat spot and the function uses that "2" card

let count = 0;

function cc(card) {
  // Only change code below this line
 switch(card) {
 case 2:
 case 3:
 case 4:
 case 5:
 case 6:
  count++;
  break;
//  case 7:
//  case 8:
//  case 9:
//  count;
//  break;
 case 10:
 case 'J':
 case 'Q':
 case 'K':
 case 'A':
 count--;
 break;
 }

var holdbet = "Hold"
if (count > 0) {
  holdbet = "Bet"
}

 return count + " " + holdbet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


//^ SECOND VERSION TRYING IT A LITTLE DIFFERENTLY
//* LEARNED: 
let count1 = 0;

function cc(card) {
  // Only change code below this line
switch (card) { //~ card is going to change on each hand as the 
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count1 ++;
  break;
  case 7:
  case 8:
  case 9:
  count1;
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count1 --;
  break;
}
let returnStatement = "Hold"
if (count1 > 0)
{returnStatement = "Bet"}

  return count1 + " " + returnStatement;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');