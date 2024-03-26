// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

// Example

function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'top')) // true
console.log(checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle')); // false
// The first checkForProperty function call returns true, while the second returns false.

//* Notice that we changed the return below to display something besides true or false. This moethod returns a true or false by default. So to get some other outcome or result, we have to return whatever it is we want back. In this case, FCC wanted to return the actual property on that object


function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    }
    else {
        return "Not Found";  
    // Only change code above this line
  }
}

  console.log(checkObj({'Best Team': 'Duke', 'Decent Team': 'Ohio State', 'Worst Team': 'UNC'},'Best Team')) //notice the arguments being passed are an entire object and then one of the property names of that object
  console.log(checkObj({'Best Team': 'Duke', 'Decent Team': 'Ohio State', 'Worst Team': 'UNC'},'No Team'))



// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     if (obj.hasOwnProperty(checkProp)) {
//       return obj[checkProp];
//     }
//     return "Not Found";
// }
// console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));


//^ Study Time 3/25/2024 from 1:26pm until  

//below is the answer, which I almost got. But I entered return obj.checkProp
// In thinking through this, I am dot notating ... which does what? Dot notation says go to this property from the object I dotted from...and then do what? ... then give me the value of that property. But what do the square brackets do?
// Well, when using dot notation, "...the property name must be known at the time of writing the code." 
// So when I tried to use return obj.checkProp, I was asking for a property called checkProp on the obj object.
// What I need though, is square brackets which says to give me the value of whatever is being passed through checkProp from the user
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp]
  }
  return 'Not Found';
  // Only change code above this line
}