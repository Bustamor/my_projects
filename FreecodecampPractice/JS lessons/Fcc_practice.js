// // .push
// // Setup
// const myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// myArray.push(["dog", 3]);

// // const threeArr = [1, 4, 6];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);
// The first console.log will display the value 6, and the second will display the value [1, 4].

// Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
// Setup
// const myArray = [["John", 23], ["cat", 2]];

// // Only change code below this line
// const removedFromMyArray = myArray.pop();

// MANIPULATE ARRAYS WITH shift()
// removes FIRST item
// // Setup
// const myArray = [["John", 23], ["dog", 3]];

// // Only change code below this line
// const removedFromMyArray = myArray.shift();

// MANIPULATE ARRAYS WITH unshift()
// // // Setup
// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();

// // Only change code below this line
// myArray.unshift(["Paul", 35]);

// Passing VALUES to FUNCTIONS WITH ARGUMENTS
// function functionWithArgs(one, two){
//   console.log(one + two)
//   };
//   functionWithArgs(1 , 2);
//   functionWithArgs(7 , 9);
  
// RETURN A VALUE FROM A FUNCTION WITH RETURN
// function timesFive(num) {
//   return num * 5;
// }
// const answer = timesFive;

// Local SCOPE AND functions
// function myLocalScope() {
//   // Only change code below this line
//   const myVar = "dude"
//   console.log('inside myLocalScope', myVar);
// }
// myLocalScope();
//   console.log(myVar);
// // Run and check the console
// // myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);

// *** ASSIGNMENT WITH A RETURNED VALUE
// Setup
// let processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// // Only change code below this line
// processArg(7)
// processed = processArg(7)

// 50%

// STAND IN LINE  ???? WHAT THE WHAT????
// function nextInLine(arr, item) {
//   // Only change code below this line
//   arr.push(item);
//   return arr.shift();
//   // Only change code above this line
// }

// // Setup
// let testArr = [1, 2, 3, 4, 5];

// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// IF STATEMENTS CONDITIONAL LOGIC
// function trueOrFalse(wasThatTrue) {
//   // Only change code below this line
//   if (wasThatTrue) {
//     return "Yes, that was true";
//   }
//   return "No, that was false"
//   // Only change code above this line

// }

// COMPARISONS WITH LOGICAL OPERATOR ||

// function testLogicalOr(val) {
//   // Only change code below this line

//   if (val < 10 || val > 20) {
//     return "Outside";
//   }

  

//   // Only change code above this line
//   return "Inside";
// }

// testLogicalOr(15);

// IF ELSE STATEMENTS

// function testElse(val) {
//   let result = "";
//   // Only change code below this line

//   if (val > 5) {
//     return   "Bigger than 5";
//   } else  {
//     return  "5 or Smaller";
//   }

//   // Only change code above this line
//   return result;
// }

// testElse(4);

// ELSE/IF
// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   }

//    else if (val < 5) {
//     return "Smaller than 5";
//   }
//   else {
//   return "Between 5 and 10";
//   }
// }

// testElseIf(7);

// CHAINING ELSE/IF STATEMENTS
// function testSize(num) {
//   // Only change code below this line
//   if (num < 5)
//     return "Tiny"
//     else if (num <10) {
//     return "Small"
//     }
//     else if (num <15) {
//     return "Medium"
//     }
//     else if (num < 20){
//     return "Large"
//     }
//     else {
//       return "Huge"
//     }

//   return "Change Me";
//   // Only change code above this line
// }

// testSize(7);

// GOLF CODE ELSE IF or TERNARY works here ***


// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
//     if (strokes ==1) {
//       return names[0];
//     }
//     else if (strokes <= par-2) {
//       return names[1];
//     }
//     else if (strokes == par-1) {
//       return names[2];
//     }
//     else if (strokes == par) {
//       return names[3];
//     }
//     else if (strokes == par +1){
//       return names[4];
//     } 
//     else if (strokes == par +2) {
//       return names[5];
//     }
    
//   return names[6];
//   // Only change code above this line
// }

// golfScore(5, 4);
// SELECTING FROM MANY OPTIONS WITH SWITCH STATEMENTS

// function caseInSwitch(val) {
//   let answer = "";
//   // Only change code below this line
// switch (val){
//   case 1:
//   answer ="alpha";
//   break;
// }

// switch (val){
//   case 2:
//   answer ="beta";
//   break;
// }
// switch (val){
//   case 3:
//   answer ="gamma";
//   break;
// }
// switch (val){
//   case 4:
//   answer ="delta"
// }

//   // Only change code above this line
//   return answer;
// }

// caseInSwitch(1);

// Adding a Default Option in Switch Statements

// function switchOfStuff(val) {
//   let answer = "";
//   // Only change code below this line
// switch(val) {
//   case "a":
//   answer = "apple"
//   break;

//   case "b":
//   answer = "bird"
//   break;

//   case "c":
//   answer = "cat"
//   break;

//   default:
//   answer = "stuff";
// }

   

//   // Only change code above this line
//   return answer;
// }

// switchOfStuff(1);

// CASE RANGES

// COUNTING CARDS LOGIC

// let count = 0;

// function cc(card) {
//   // Only change code below this line
// switch (card) {
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     count ++;
//   break;
//   case 10:
//   case 'J':
//   case 'Q':
//   case 'K':
//   case 'A':
//     count --;
//   break;
// }
// if (count > 0){
//   return count + " Bet";
// } else {
//   return count + " Hold"
// }
  
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// **** USING OBJECTS FOR LOOKUPS
// Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie":"Chicago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "Frank"
//   };

// result = lookup[val]
//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");

// HAS OWN PROPERTY WITH BRACES (WHY)
// function checkObj(obj, checkProp) {
//   // Only change code below this line
//    if (obj.hasOwnProperty(checkProp)){
//        return obj[checkProp];

//    }
//   else {
//       return "Not Found";
  
//   }
//   // Only change code above this line
// }

// MANIPULATING COMPLEX OBJECTS 82%
// const myMusic = [
//   {
//     "artist": "Paul Simon",
//     "title": "Graceland",
//     "release_year": 1986,
//     "formats": [
//       "CD",
//       "LP",
//       "8T"
//     ],
//   },
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   }
  
// ];

//  SUB PROPERTIES OF BRACKET AND DOT NOTATION
// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };


// const gloveBoxContents = myStorage.car.inside["glove box"];

// RECORD COLLECTION !!!*****
// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {

//  if ( prop !== "tracks" && value !== ""  ) {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
  
//    records[id][prop] = [value];
//    } else if (prop === "tracks" && value != ""){
//       records[id][prop].push(value);
//     }
//     else if (value == "") {
//       delete records[id][prop];
//     }
//     return records;
// }
// updateRecords(recordCollection, 5439, 'artist', 'ABBA');