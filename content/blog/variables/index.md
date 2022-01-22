---
title: Variables
date: "2021-12-22T22:12:03.284Z"
description: "Learn what variables are and how to create and use them in Javascript."
---

Video: https://youtu.be/NAS6Ai8WXE0

Code from this video: https://jsfiddle.net/2oarL74q/

---

### Variables summary

Variables are a way for us to store data. **You can think of it as a compartment in which you can store just about any type of data**. Once a variable is holding data you can do just about anything with that data by referencing the variable by its name.

And now to shed some light on the obvious question - **what type of data can we put in a variable? Here's a list of the most common types of data we can store in variables:**

- Boolean - these are `true` and `false` values
- String - these are a sequence of characters and are usually enclosed in single or double quotes.
- Number - these can be integers or decimals

**In Javascript most people usally declare variables in two ways. These are variables which are declared and created using the following keywords:**

- `let`
  - When using `let` it is not required for you to initialize the variable with data. You have the option of assigning a value to the variable further down your code.
  - After you've assigned a value to a `let` variable you have the ability to alter that value just about anywhere else in your code.
- `const`
  - When using `const` you are required to assign an initial value to the variable otherwise an error will be thrown.
  - Once an initial value has been assigned you will no longer be able to change the value of the variable (though they are exceptions to this that we will talk about in later videos).

### Examples

**You can run all of these examples yourself by going to jsfiddle: https://jsfiddle.net/**

#### Variable data types examples:

##### Boolean

These are true and false values

```javascript
let areYouHappy = true

let areYouSad = false
```

##### String

These are a sequence of characters and are usually enclosed in single or double quotes

```javascript
let myName = "John Doe"

// Note that when enclosed in quotes a number becomes a string
let age = "26"
```

##### Number

These can be integers or decimals

```javascript
// Integers
let age = 26

// Can hold decimals too
let average = 50.5
```

#### Variable declaration examples:

##### `let` variables

```javascript
// Declare a new variable with an initial value
let fullName = "John Doe"

// Print the contents of that variable by calling it by its name
console.log(fullName) // John Doe

// Declare an empty variable
let email
console.log(email) // nothing here to print

// Assign a value to a variable after declaration
email = "johndoe@mail.com"
console.log(email) // johndoe@mail.com
```

##### `const` variables

```javascript

// This will throw an error because an initial value is required
const fullName;

// Declare a new variable with an initial value
const fullName = "Doe John";

// Print the contents of that variable by calling it by its name
console.log(fullName); // Doe John


// Assigning a value to a const variable after initialization will also throw an error.
// Recall that once a value has been assigned to a const variable that variable can no longer be changed.
fullName = "johndoe@mail.com";
console.log(email); // johndoe@mail.com
```

### Practice

Variables are everywhere in programming so it's a good idea for you to get in the habit of practicing these new concepts as you learn them.

NOTE: There's a practice jsfiddle for this section which you can find [here](https://jsfiddle.net/s3mzbrcw/) (Remember to switch to the Javascript tab).
