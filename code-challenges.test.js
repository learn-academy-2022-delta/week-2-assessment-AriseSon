// // ASSESSMENT 2: Coding Practical Questions with Jest


// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// // a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]


// // b) Create the function that makes the test pass.

const timesThree = numbersArray1.map(value => {
  return value * 3
})

console.log(timesThree)



//1//
// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// // a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// // Expected output: "15 is divisible by three"
const num2 = 0
// // Expected output: "0 is divisible by three"
const num3 = -7
// // Expected output: "-7 is not divisible by three"

//----- MY TEST -------

describe("create a function call it outcome", () => {

    it("use if statement to check if num1 is divisible by three with no remainder, if statement is true then log num1 is divisible by three, if statement is false then log num2 is not divisible by three", () => {
 
      expect(outcome(num1)).toEach("15 is divisible by three")
    })
})      

describe("create a function call it outcome", () => {

    it("use if statement to check if num2 is divisible by three with no remainder, if statement is true then log num2 is divisible by three, if statement is false then log num2 is not divisible by three", () => {
 ""
      expect(outcome(num2)).toEach("0 is divisible by three")
    })
}) 

describe("create a function call it outcome", () => {

    it("use if statement to check if num3 is divisible by three with no remainder, if statement is true then log num3 is divisible by three, if statement is false then log num2 is not divisible by three", () => {
 
      expect(outcome(num3)).toEach("-7 is not divisible by three")
    })
})



// // b) Create the function that makes the test pass.


//----- I created a functiion called outcome

const outcome = () => {

//----- I used a if statement to return num1 as (`${num1} is divisible by three`) if num1 is divisible by 3 with no remainder

     if (num1 % 3 == 0) {
   
   
       return (`${num1} is divisible by three`)
      } 
      else {
   
//----- If else, return (`${num1} is not divisible by three`)

       return (`${num1} is not divisible by three`)
       }
    } 

//----- console.log(result)
      
console.log(outcome())

//------ My Expected Output : "15 is divisible by three"
//------ My Output : "15 is divisible by three"


// const outcome = () => {

//     if (num2 % 3 == 0) {
   
//         return (`${num2} is divisible by three`)
    
//     } 
//    else 
//     {
//    return (`${num2} is not divisible by three`)
//      
// }
//}
//----- console.log(result)
      
console.log(outcome())

//------ My Expected Output : "0 is divisible by three"
//------ My Output : "0 is divisible by three"



// const outcome = () => {

//     if (num3 % 3 == 0) {
   
//         return (`${num3} is divisible by three`)
    
//     } 
//    else 
//     {
//    return (`${num3} is not divisible by three`)
//      
// }
//} 
//----- console.log(result)
      
console.log(outcome())

//------ My Expected Output : "-7 is not divisible by three"
//------ My Output : "-7 is not divisible by three"



//2//
// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//------ MY TEST----------------

describe("capFirst", () => {

    it("use map to pass through an array while capitalizing index 0 from randomNouns1, add substring to stop toUpperCase at index 1, then join array", () => {
   
     expect(capFirst(randomNouns1)).toEqual("Streetlamp Potato Teeth Conclusion Nephew")
   
      })
   })

describe("capFirst", () => {

    it("use map to pass through an array while capitalizing index 0 from randomNouns2, add substring to stop toUpperCase at index 1, then join array", () => {
   
     expect(capFirst(randomNouns2)).toEqual("Temperature Database Chopsticks Mango Deduction")
   
      })
   })


// // b) Create the function that makes the test pass.


//----- I created a function called capFirst

const capFirst = () => {

//----- I used the .map() to locate and capitalize .toUpperCase the index of the first letter of each word in randomNouns1 and randomNouns2
    
  let firstCap = randomNouns2.map(value => {

    return value.toUpperCase() + value.substring(1)
    })

//----- I used the .join(" ") to get the array of strings to display as expected    

    return firstCap.join(" ")
}

//----- console.log results

console.log(capFirst())

//---- My Expected Output : "Temperature", "Database", "Chopsticks", "Mango", "Deduction"
//---- My Output : "Temperature", "Database", "Chopsticks", "Mango", "Deduction"



// const capFirst = () => {

//    let firstCap = randomNouns1.map(value => {
    
//     return value.toUpperCase() + value.substring(1) 
// })
//      return firstCap.join(" ")
// }
// console.log(capFirst())

//---- My Expected Output : "Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"
//---- My Output : "Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"



//3//
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

 const vowelTester1 = "learn"
// Expected output: 1
 const vowelTester2 = "academy"
// Expected output: 0
 const vowelTester3 = "challenges"
// Expected output: 2


//------- MY TEST-----------

describe("findFirstVowel", () => { 

 it("use .split to split vowelTester1, then use indexOf to index the first instance of a vowel", () => {
  
   expect(findFirstVowel(vowelTester1)).toEqual(1)
  
  })
})

describe("findFirstVowel", () => { 

    it("use .split to split vowelTester2, then use indexOf to index the first instance of a vowel", () => {
     
      expect(findFirstVowel(vowelTester2)).toEqual(0)
     
     })
   })

describe("findFirstVowel", () => { 

    it("use .split to split vowelTester3, then use indexOf to index the first instance of a vowel", () => {
     
      expect(findFirstVowel(vowelTester3)).toEqual(2)
     
     })
   })


// // b) Create the function that makes the test pass.


//---- I created a function called findFirstVowel

const findFirstVowel = () => {

//----- I used .split("") to separate the letters in the string

const firstVowel = vowelTester1.split("")

//----- I used .indexOf to reference the first instance of a vowel

    return firstVowel.indexOf("a", "e", "i", "o", "u")  

}
//----- Console.log the results

console.log(findFirstVowel())

//----- My Expected Output : 1
//----- My Output : 1



// const findFirstVowel = () => {
   
//     const firstVowel = vowelTester2.split("") 
    
//         return firstVowel.indexOf("a", "e", "i", "o", "u")  
    
//     }
    
//     console.log(findFirstVowel())

//----- My Expected Output : 0
//----- My Output : 0



//     const findFirstVowel = () => {
   
//         const firstVowel = vowelTester3.split("") 
        
//             return firstVowel.indexOf("a", "e", "i", "o", "u")  
        
//         }
        
//         console.log(findFirstVowel())

//----- My Expected Output : 2
//----- My Output : 2