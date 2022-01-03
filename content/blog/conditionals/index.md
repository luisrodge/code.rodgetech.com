---
title: 3. Conditionals
date: "2022-01-02T22:12:03.284Z"
description: "Learn what conditionals are and how to create and use them in Javascript."
---

Video: https://youtu.be/5pRWaIOAxyk

Code from this video: https://jsfiddle.net/s28jmn4q/6/

---

### Conditionals summary

Conditionals are a way for you to control the execution flow of your code. You can you use conditionals to determine if once piece of code runs or not. So at it's core, conditionals allow you to make decisions in your code. For example, say you have a budget app that notifies you when your expenses have exceeded your monthly limit. The condition in this example would be something like this in human language - if my current expenses is greater than my monthly limit then send me a notification.

#### First: Logical operators

In the previous post we went over the common operators that you will mostly be working with however I deliberately didnt cover another type of common operator because it goes hand in hand with conditionals - these are the logical operators.

We can use logical operators to connect two or more conditions (comparisons) that will result to either a true or false value.

| Operator | Symbol | Usage    | Details                                  |
| -------- | ------ | -------- | ---------------------------------------- |
| AND      | `&& `  | x && y   | return true if both `x` AND `y` are true |
| OR       | `\|\|` | x \|\| y | return true if either `x` OR `y` is true |
| NOT      | `! `   | !x       | return true if `x` is false              |

```javascript
// Logical AND operator
console.log(true && true) // true
console.log(true && false) // false

// Logical OR operator
console.log(true || true) // true
console.log(true || false) // true
console.log(false || false) // false

// Logical NOT operator
console.log(!false) // true
console.log(!true) // false
```

### Conditionals

Now that we've covered logical operators we can start looking into some of the common conditional statements we can use to make decisions in our code.

#### if...else statement

We use the if else statement to control which block of code will be executed under certain conditions. There's 3 forms of the if else statement that we can use in Javascript (and just about every other programming language).

1. if statement
2. if...else statement
3. if...else if...else statement

##### 1. if statement

```javascript
if (condition) {
  console.log("Hello")
}
```

Overview of what's happening above:

1. Notice how we define a basic if statement - we start with the `if` keyword followed by opening and closing parentheses.
2. Inside the parentheses `()` is where our condition will go. This condition will usually make use of the comparison and logical operators we previously went over. The condition will eventually result to either a true or false value.
3. To define the body of the if statment we use what are called curly braces `{}`. Inside the curly braces would go whatever code you want to run if the condition results to true.

Now let us take a look at a practical example

```javascript
let age = 22

// true
if (age >= 21) {
  console.log("You can have a drink") // ✅ This code will be executed once
}

age = 17

// false
if (age >= 21) {
  console.log("You can have a drink") // ❌ This code will not be executed
}
```

The first if statement will check if age is greater than or equal to 21 and since it is we then expect the string "You can have a drink" to be outputted to the console.

The second if statement will perform the same condition to check if age is greater than or equal to 21 but because we've changed age to 17 the condition will be false and so the body of the if statement will not be executed.

##### 2. if...else statement

This form of the if statement has a second portion to it which is known as the else clause. The else clause is like the default block of the if statement - this means if no prior condition was true then whatever code is in the body of the else clause will be executed.

```javascript
if (condition) {
  console.log("True")
} else {
  console.log("False")
}
```

Breakdown:

1. if the condition results to true then the body of the if statement will be executed
2. if the condition results to false then the body of the if statement will be skipped and the body of the else clause will be executed

Example:

```javascript
let age = 25

if (age >= 21) {
  console.log("You can have a drink") // ✅ This code will be executed
} else {
  console.log("You are not allowed to have a drink") // ❌ This code will be skipped
}

age = 15

if (age >= 21) {
  console.log("You can have a drink") // ❌ This code will be skipped
} else {
  console.log("You are not allowed to have a drink") // ✅ This code will be executed
}
```

In the first if else statement we expect the string "You can have a drink" to be outputted to console because the condition is true. We can also expect the code within the else clause to be skipped.

In the second if else statement we expect the string "You are not allowed to have a drink" to be outputted to console because the condition is false. We can also expect the body of the if statement to be skipped.

##### 2. if...else if statement

So far we've looked at controlling the execution of our code given one source of condition but what if we'd like to control execution using multiple conditions? This is where the else if statement can help us.

```javascript
if (condition 1) {
  console.log("First condition is true")
} else if (condition 2) {
  console.log("Second condition is true")
} else {
   console.log("None of the conditions are true")
}
```

Breakdown:

1. if condition 1 is true then only the body of the if statement will be executed and both bodies of the else if and else statements will be skipped.
2. if condition 1 is false but condition 2 is true then only the body of the else if statement will be executed and both bodies of the if and else statement will be skipped.
3. if both condition 1 and condition 2 are false then only the body of the else statement will be executed and both bodies of the if and else if statements will be skipped.

**It's important to note that only one block of code will ever be executed when you have multiple conditions. This means that the first condition that results to true will have it's block of code executed and any following conditions will be skipped.**

Lets have at some examples:

```javascript
let age = 12

if (age < 18) {
  console.log("You are too young to be drinking") // ✅ Executed
} else if (age >= 18 && age < 70) {
  console.log("You can have a drink") // ❌ Skipped
} else {
  console.log("You should retire from drinking") // ❌ Skipped
}

age = 19

if (age < 18) {
  console.log("You are too young to be drinking") // ❌ Skipped
} else if (age >= 18 && age < 70) {
  console.log("You can have a drink") // ✅ Executed
} else {
  console.log("You should retire from drinking") // ❌ Skipped
}

age = 80

if (age < 18) {
  console.log("You are too young to be drinking") // ❌ Skipped
} else if (age >= 18 && age < 70) {
  console.log("You can have a drink") // ❌ Skipped
} else {
  console.log("You should retire from drinking") // ✅ Executed
}
```

Lets dissect what's happening here:

- In the first if...else if example we expect only the body of the if statement to be executed and the string "You are too young to be drinking" to be outputted to the console since age is less than 18.
  - `if (age < 18)` results to true so the body of the if will be executed
  - `else if (age >= 18 && age < 70)` the body of the else if will be skipped since a prior condition has already resolved to true
  - `else` the body of the else will also be skipped because a prior condition has already resolved to true
- In the second example we expect only the body of the else if statement to be executed and the string "You can have a drink" to be outputted to the console since age is greater than or equal to 18 AND age is less than 70.

  - `if (age < 18)` results to false so the body of the if will be skipped
  - `else if (age >= 18 && age < 70)` results to true so the body of the else if will be executed
  - `else` the body of the else will also be skipped because a prior condition has already resolved to true

- In the final example we expect only the body of the else clause to be executed and the string "You should retire from drinking" to be outputted to the console since age is greater than 70.
  - `if (age < 18)` results to false so the body of the if will be skipped
  - `else if (age >= 18 && age < 70)` results to false so the body of the else if will also be skipped
  - `else` the body of the else will be execute since no prior condition was resolved to true

### That's it, for now!

That's all for now but there's still so much more to come. So until then I just want to thank you for stopping by and if you have any questions please never hesitate to contact me. Remember, you can always send your questions to my email @ rodgetech@gmail.com
