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

#### Logical operators

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

We use the if else statement to control which block of code will be executed under certain conditions. There's 3 forms of the if else statement that can use in Javascript (and just about every other programming language).

1. if statement
2. if...else statement
3. if...else if...else statement

##### 1. if statement

```javascript
if (condition) {
  console.log("Hello)
}

```

Overview of what's happening above:

1. Notice how we define a basic if statement - we start with the `if` keyword followed by opening and closing parentheses.
2. Inside the parentheses `()` is where our condition will go. This condition will usually make use of the comparison and logical operators we previously went over. The condition will eventually result to either a true or false value.
3. To define the body of the if statment we use what are called curly braces `{}`. Inside the curly braces would go whatever code you want to run if the condition results to true.

Now let us take a look at a practical example

```javascript
const age = 22

// true
if (age >= 21) {
  console.log("You can have a drink") // This code will be executed once
}

age = 17

// false
if (age >= 21) {
  console.log("You can have a drink") // This code will not be executed
}
```

The first if statement will check if age is greater than or equal to 21 and since it is we then expect the string "You can have a drink" to be outputted to the console.

The second if statement will perform the same condition to check if age is greater than or equal to 21 but because we've changed age to 17 the condition will be false and so the body of the if statement will not be executed.

### That's it, for now!

That's all for now but there's still so much more to come. So until then I just want to thank you for stopping by and if you have any questions please never hesitate to contact me. Remember, you can always send your questions to my email @ rodgetech@gmail.com
