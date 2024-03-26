// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects
// Accessing Nested Objects
// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// Here is a nested object:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2 // this would be the string secrets, and ourStorage.desk.drawer would be the string stapler.

// ourStorage.cabinet["top drawer"].folder2;
// In this example, "top drawer" is a property name with a space in it. Using dot notation isn't possible in this case because property names with spaces are not valid in dot notation. Therefore, square bracket notation is used.

//? Questions
// Why do we use bracket notation sometimes? When there is a space or special character in the name of the property we can use square bracket notation to reference instead of dot notation which wouldn't allow us to use the space between "top" and "drawer"