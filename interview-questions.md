# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer:

  A parameter is a named variable passed into a function. Arguments are objects used to run the functions.

  Researched answer:

The arguments is an object which is local to a function. This object (arguments) is used to access the parameter passed to a function. It is only available within a function. This object (arguments) is used to access the parameter passed to a function. It is only available within a function. Arguments object allow you to access all of the arguments that are passed to a function. We can access these arguments using indexes.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer:

  The predefined parameters .map() takes are value and index. Im not sure which is optional.
   
  Researched answer:

  . map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements.
  ----- EX -----
  .map(value, index, array)



3. What is the difference between map and filter?

  Your answer:

  The .map() is used to loop arrays and return new arrays the same length as the original array.
  
  The .filter() is also used to loop arrays but it only return the value stated in the if statement. 

  Researched answer:

.map() and .filter are higher order functions. Higher order functions take other functions as arguments and/or return another function as an output.

.map() cycle through an array and returns a new array with the updated values.
EX
var myArray = [5, 3, 2, 9, 8]

const multiplier = myArray.map(value => value * 3)

console.log(multiplier)

.filter cycle through an array and returns a new array with values that satisfy your stated condition.
EX
const luckyNumbers = [85, 7, 5, 0, 45, 77, 9, 6]

const onlyEven = (luckyNumbers) => {
  
This example shows the array luckyNumbers being filtered .filter through for numbers that do not have a remainder after being divided by 2.
The numbers that return are the new array onlyEven and will be console logged for output.

  return luckyNumbers.filter(value => value % 2 === 0)

console.log(return luckyNumbers.filter(value => value % 2 === 0))

OUTPUT: [0, 6]



4. What is the difference between a function and a method?

  Your answer:

  The difference between a function and a method are, functions are the statement being executed. Not sure about method. 

  Researched answer:

  Functions are a set statement that perform task or calculates a value. A method contains functions functions stored as object properties.
  ----- EX ------
  object = {
    methodName: function()
 


5. What is object destructuring?

  Your answer:

  Object destructuring is the process of reassigning variables within a scope.

  Researched answer:

  The destructuring assignment is a way of assigning variables in Javascript. Destructuring allows you to take something like an array or an object and unpack their values into individual variables.
  ----- EX ----
   A sneakers object
const sneakers = {
  brand: "Nike",
  color: "Grey"



6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  I do not know the definition of hoisting, but im sure this is something related to Javascript 

  Researched answer:

  Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope or the current function.
  ----- EX ------
   const numbersArray1 = [6, 7, 8, 9, 10]---------- This is hoisting a declaration

const timesThree = numbersArray1.map(value => {
  return value * 3
})

console.log(timesThree)




## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:

Class inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more. A class can inherit all the methods and properties of another class. Inheritance is a useful feature that allows code reusability

2. React:

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.

3. React state:

React state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.

4. React lifecycle methods:

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.

5. DOM:

Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
