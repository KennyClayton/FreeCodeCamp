// From https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
// Answer here has 3 ways to write the function: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-record-collection/18261


//^ Record Collection - ATTEMPT 1
// // You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

// // The updateRecords function takes 4 arguments represented by the following function parameters:

// // records - an object containing several individual albums
// // id - a number representing a specific album in the records object
// // prop - a string representing the name of the album’s property to update
// // value - a string containing the information used to update the album’s property
// // Complete the function using the rules below to modify the object passed to the function.

// // Your function must always return the entire records object.
// // If value is an empty string, delete the given prop property from the album.
// // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// // If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
// // If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// // Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.

// // Studying 3/26/2024 5am - 
// // My first attempt took over an hour. Here it is and I had to give it up once I literally had no other code to pull from my brain. And remember that my code is only below the portion that says "Only change code below this line":
// // Setup
// const recordCollection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
  
//   // Only change code below this line
//   function updateRecords(records, id, prop, value) {
//     if (value === '') { //so if there is no value given for a property referenced...  
//       //! Below was my incorrect attempt to dot notate a delete method. Instead on the next function we'll see that I should have just called delete BEFORE the reference to the thing I needed to delete
//         records[id][prop].delete(); // ...then delete that entire property on the object. So if we receive a records value of recordCollection with an id value of 2548 as an album id argument, and we receive a 'tracks' value as the prop and an empty string as its value, then we want to just delete the tracks property entirely from album id 2548. Or if the prop argument passed to us is 'artist' and it has an empty string as its value, then we will delete the artist property altogether. So that would be record[id][prop].delete which equates to recordCollection[2548][artist].delete which puts the delete method on tht particular artist key and deletes it as a key-value pair from the 2548 record.
//     }
//     else if (prop != 'tracks' && value != '') { //* This part is correct
//         //! Again, below was my attempt to assign the provided value to the record provided. But I tried dot notation again to reference the value....I got confused. See the corrected function below where I learned that we just use the equals operator to reassign the value
//       records[id][prop].value = value // recordCollection[2789][artist].ABBA
//     }
//     else if (prop === 'tracks' && value !== '') {
//         //! Wrong again here. See corrected function below where I should have used another if statement as the first part of the execution
//       records[id][prop].add['value']; // recordCollection[artist][ABBA]
//     }
//     else if (prop === 'tracks' && value != ''){
//       records[id][tracks].add();
//       records.push()
//     }
//     return records;
//   }
  
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// //* This is the correct version from freecodecamp which I commented.
//   function updateRecords(records, id, prop, value) {
//     if (value === '') { // If the user gives us no value (an empty string), then delete whatever prop they gave us...
//         delete records[id][prop]; // ...like this. So we delete the property from the provided record id. If the argument given to us was 'artist' as the prop and there was no value given to us, then delete the artist property off of that records object
    // } else if (prop !== "tracks" && value !== "") {
    //     records[id][prop] = value; // notice that we simply use the equals operator to reassign the value of, for example, recordCollection id 2548 and its property key "artist" which we will assign to equal the value given to us by the user. It would look like this: recordCollection[2548][tracks]['Let It Rock'] if the user passed 'Let It Rock' as the argument for the value parameter.
    // } else if (prop === "tracks" && value !== "") { // if the user submits "tracks" as the key and at least enters something for the value...or, another way of reading this woulc be..."let's say the user gives you tracks for the key and anything other than a blank for the value..."
        // if (records[id].hasOwnProperty("tracks") ===  false) { // This says if, for example, record 2548 does NOT have a property ARRAY called "tracks"...
            // records[id][prop] = []; // ...then create an empty array. This is what I wasn't sure how to do either. This is how to create an empty array using the parameters. Each parameter has an argument from the user and 
//         }
        // records[id][prop].push(value); // and then push that records object to the end of the records list and enter the value provided by the user as the value. Example: updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//     }
//     return records;
//   }
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');











  //^ Record Collection - ATTEMPT 2
// You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

// The updateRecords function takes 4 arguments represented by the following function parameters:

// records - an object containing several individual albums
// id - a number representing a specific album in the records object
// prop - a string representing the name of the album’s property to update
// value - a string containing the information used to update the album’s property
// Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire records object.
// If value is an empty string, delete the given prop property from the album.
// If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
// If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.

//Starter code
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) { // pretend value given by user is 'It Ain't Safe'
    // If value is an empty string, delete the given prop property from the album.
    if (value === '') {
        delete records[id][prop];
    }
    // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
    else if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    }
    // If prop is tracks and value isn't an empty string but the album doesn't have a tracks property, create an empty array and add value to it.
    else if (prop === 'tracks' && value !== '') {
        if (records[id].hasOwnProperty('tracks') === false) { // remember the hasOwnProperty method returns true or false, so we can check for the existence of a prop on an object
            records[id][prop] = []; //created an empty array
        }
        // records[id][prop] = value; //! This line was my incorrect initial code which would overwrite the tracks array each time. As explained by ChatGPT: "In the first version, you're simply assigning value to records[id][prop]. This means if you encounter multiple tracks for the same id, you'll overwrite the previous track each time. This is incorrect because you want to add tracks to an array, not replace the entire array each time."
        records[id][prop].push(value); //* This is the correct code. As explained by ChatGPT: "The second version correctly uses push() to add the value to the tracks array, ensuring that multiple tracks are stored in the array rather than replacing it each time."
    } 
    return records;
    }
  
  console.log(updateRecords(recordCollection, 5439, 'tracks', 'It Aint Safe'));