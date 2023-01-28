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