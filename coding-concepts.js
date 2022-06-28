// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer:

// I think this will log 'D', 'e', 'l', 't', 'a', '2', '0', '2', '2' .... I recently used the .split(" ") in problem 3 on week 2
//                                                                        code challenges- est .... EX vowelTester1.split("") 

// b) Verify and explain:

//---- CONSOLE.LOG ----
//  'D', 'e', 'l', 't',  .split("") converts a string into an array, .split("") takes an optional argument that describes where the 
//  'a', ' ', '2', '0',  string string is split. The original string is unchanged 
//  '2', '2'                         



// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}                                                 
 console.log(greeter("LEARN Student"))

// a) Your answer:

// I think this will log Hello, LEARN Student

// b) Verify and explain:

//---- CONSOLE LOG ----
//     undefined ......... 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
 console.log(multBy2)

// a) Your answer:

// I think this will log [8, 10, 12, 14, 16] .... I recently used the .map() in the practice problem on week two
//                                                code challenges test .... EX const timesThree = numbersArray1.map(value => {
//                                                                                                 return value * 3
                                                                      
// b) Verify and explain:

//---- CONSOLE LOG ----
// [ 8, 10, 12, 14, 16 ] .... .map() account for each element in an array, .map() will not execute for empty elements.
//                             (value => value * 2) multiple the value times two



// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:

// I think this will log [11, 13, 15] .... I recently used the .filter() in problem 4 on week 1 assignment to account for
//                                         odd and even numbers.
//                                         EX .... const myArray = [13, 34, 5, 10, 27, 42].filter(value => value % 2 !== 0)
// b) Verify and explain:

//----- CONSOLE.LOG-----
//    [ 11, 13, 15 ] ............ .filter() create a new array with elements that pass a test provided by a function.
//                                .filter not execute for empty elements, nor does this method change the original array. 
//                                (value => value % 2 !== 0) the function will keep all numbers that doesnt have a remainder 
//                                of 0.



// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:

// I think this will log JavaScript .... 

// b) Verify and explain:

//---- CONSOLE.LOG ----
//     JavaScript ........ console.log(myCodingSkills.languages[0]) .... Javascript is in the 0 index of the array lanuages,
//                                                                       inside myCodingSkills 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:

// I think this will log  George Bravo 2022

// b) Verify and explain:

//----CONSOLE.LOG ----
// ---- { student: 'George', cohort: 'Bravo', year: 2022 } .... I was off 
//                                                              learnStudent equals George added to class .... When the function
//                                                              invokes, the constructor executes this, which will log 
//                                                              { student: 'George', cohort: 'Bravo', year: 2022 }
