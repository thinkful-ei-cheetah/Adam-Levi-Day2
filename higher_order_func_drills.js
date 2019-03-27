'use strict';
// repeat function drill----------------------------------------------------------
function repeat(fn, n){
    // eslint-disable-next-line no-undef
    for ( let i = 0; i < n; i++) {
        fn();
    }
}

// function hello() {
//     console.log('Hello World');
// }
// function goodbye() {
//     console.log('Goodbye World');
// }
const hello = () => console.log('Hello World');
const goodbye = () => console.log('Goodbye World');

repeat(hello, 5);
repeat(goodbye, 5);

// filter funciton drill---------------------------------------------------------

function filter(arr, fn) {
    let newArray = [];
    for(let i = 0; i< arr.length; i++){
        if(fn(arr[i]) === true){
            newArray.push(arr[i]);
        }
    }
    return newArray;
    //TASK: Define your function here
}

//const filter = (arr, fn) => ASK MENTORS!!!

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// function as return values drill -----------------------------------------------

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter ++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        // console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter > 1 ? 'times': 'time'} today!`);
    };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const hrainWarning = hazardWarningCreator('Heavy rain imminent');
const floodWarning = hazardWarningCreator('Risk of flooding in your area');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
function isPositive (value) {
 return value > 0;
}

// Turtle movement drill STUCK ask mentor.-----------------------------------------------------------------
// A little less stuck now. 

function turtleMovement(arr){
    console.log(arr);
    let filteredSteps = [];
    for (let i = 0; i < arr.length; i++){
      //console.log(arr[i]);
      const result = arr[i].filter(subArr => subArr >= 0); // && subArr[1] >= 0);
      if (result.length > 1){
        filteredSteps.push(result);
      }
    }
    console.log(filteredSteps);
    return filteredSteps;
}

function turtleSteps (arr){
    let allSteps = [];
    for(let i = 0; i < arr.length; i++){
      const steped = arr[i].reduce(function(a,b){ 
          return Math.abs(a) + Math.abs(b);
        });
        allSteps.push(steped);
      }
      console.log(allSteps);
      return allSteps;
  }


  const turtle = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]; 
  turtleMovement(turtle);
  turtleSteps(turtle);
//Rich's solution to the turtle drill --------------------------------------------------------------------
const fSteps = turtle.filter(stepPair => stepPair[0] > -1 && stepPair[1] > -1);
const totalSteps = fSteps.map(stepPair => stepPair[0] + stepPair[1]);
totalSteps.forEach((stepTotal, index) => console.log(`Step ${index + 1}: ${stepTotal}`));


// reduce drill -------------------------------------------------------------------------------------------

function decoder(sentence) {
    let words = sentence.split(' ');
    let dWords = words.reduce(decodeWord, '');
    return dWords;
  }
  
  function decodeWord(sentence, word) {
      if (word.length === 3) {
          sentence += ' ';
      }
      else {
          sentence += word.substr(word.length - 1).toUpperCase();
      }
      return sentence;
  }
  
  let eCode = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
  console.log(decoder(eCode));