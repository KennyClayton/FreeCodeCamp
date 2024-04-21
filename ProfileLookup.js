//* my comments will be in green
// Profile Lookup
// We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
//* Need to use hasOwnProperty method
// If both are true, then return the "value" of that property.
//* if statement
// If name does not correspond to any contacts then return the string No such contact.
//* else if
// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
//* else

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) { //* for every object in the array...
    if (contacts[i].firstName === name) { //* check if the "contacts" array's 0-indexed object's firstName property's value to see if it equals the "name" value passed to us...
      return contacts[i][prop] || "No such property"; //*...and if so, return the value of that property (from the 0-indexed object)
    }
}
return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Akira", "dislikes"));
console.log(lookUpProfile("Kristian", "likes"));
console.log(lookUpProfile("Holmes", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));



//* ChatGPT version:

function lookUpProfile(name, prop) {
    // Only change code below this line
    // Iterate through the contacts array
    for (let i = 0; i < contacts.length; i++) {
      // Check if the current contact's first name matches the provided name
      if (contacts[i].firstName === name) {
        // Check if the contact has the provided property //*So if we have a match for the first name value...
        if (contacts[i].hasOwnProperty(prop)) { //*...then check whether the contact has a property matching the one given to us by the user
          // Return the value of the property
          return contacts[i][prop]; //* return the property of the object from the contacts array
        } else {
          // If the contact doesn't have the provided property, return "No such property"
          return "No such property"; 
        }
      }
    }
    // If the contact with the provided name is not found, return "No such contact"
    return "No such contact";
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");