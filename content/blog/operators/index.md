---
title: Operators
date: "2021-12-23T22:12:03.284Z"
description: "Learn what operators are and how to create and use them in Javascript."
---

Video: https://youtu.be/5pRWaIOAxyk

Code from this video: https://jsfiddle.net/s28jmn4q/6/

---

### Operators summary

In programming world, operators are reserved symbols that you can use to perform mathematical or logical operations. You can use them for arithmetic or for checking if a variable is equal to a value or to another variable and much more of course.

The following are the common types of operators that you will usually be working with:

#### Arithmetic

We can use arithmetic operators to perform operations such as addition, subtraction, multiplication and division.

| Symbol | Operation      | Usage  | Details               |
| ------ | -------------- | ------ | --------------------- |
| +      | addition       | x + y  | add `y` to `x`        |
| -      | subtraction    | x - y  | subtract `y` from `x` |
| \*     | multiplication | x \* y | multiply `x` with `y` |
| /      | division       | x / y  | divide `x` by `y`     |

```javascript
// Addition
let a = 5 + 5
console.log(a) // 10

// Subtraction
let s = 10 - 5
console.log(s) // 5

// Multiplication
let m = 5 * 2
console.log(m) // 10

// Division
let d = 4 / 2
console.log(d) // 2
```

#### Assignment

You already saw one example of this in the previous section where we went over variables - that is assigning a value to a variable. We have a few more assignment operators than just the `=` one.

| Symbol | Operation               | Usage   | Same as    | Details                                                |
| ------ | ----------------------- | ------- | ---------- | ------------------------------------------------------ |
| =      | assignment              | x = y   |            | assignes whatever value is in `y` to `x`               |
| +=     | add and assignment      | x += y  | x = x + y  | assignes to `x` the result of adding `y` to `x`        |
| -=     | minus and assignment    | x -= y  | x = x - y  | assignes to `x` the result of minusing `y` from `x`    |
| \*=    | multiply and assignment | x \*= y | x = x \* y | assignes to `x` the result of multiplying `x` with `y` |
| /=     | divide and assignment   | x /= y  | x = x / y  | assignes to `x` the result of dividing `x` by `y`      |

```javascript
// Assignment
let name = "John Doe"
console.log(name) // John Doe

// Add and assignment
let x = 5
x += 5 // x = 5 + 5
console.log(x) // 10

// Minus and assignment
let x = 5
x -= 3 // x = 5 - 3
console.log(x) // 2

// Multiply and assignment
let x = 5
x *= 2 // x = 5 * 2
console.log(x) // 10

// Divide and assignment
let x = 4
x /= 2 // x = 4 / 2
console.log(x) // 2
```

#### Comparison

We use comparision operators to do comparisons. They result to either a true or false value (Boolean) based on whatever comparision is being made. For example, we can use comparision operators to check if two variables are equal or unequal.

| Symbol | Operation             | Usage  | Details                                                                                                     |
| ------ | --------------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| ==     | equal                 | x == y | checks if `x` equals `y` - If equals the comparision results to true                                        |
| !=     | not equal             | x != y | checks if `x` does not equal `y` - If not equals the comparision results to true                            |
| >      | greater than          | x > y  | checks if `x` is greater than `y` - If greater the comparision results to true                              |
| <      | less than             | x < y  | checks if `x` is less than `y` - If lesser the comparision results to true                                  |
| >=     | greater than or equal | x >= y | checks if `x` is greater than or equal to `y` - If is greater than or equal the comparision results to true |
| <=     | less than or equal    | x <= y | checks if `x` is less than or equal to `y` - If is less than or equal the comparision results to true       |

```javascript
// Equal
console.log(5 == 5) // true
console.log(5 == 4) // false

// Not equal
console.log(5 != 6) // true
console.log(5 != 5) // false

// Greater than
console.log(5 > 4) // true
console.log(5 > 6) // false

// Less than
console.log(5 < 6) // true
console.log(5 < 4) // false

// Greater than or equal
console.log(5 >= 5) // true
console.log(5 >= 4) // true
console.log(5 >= 6) // false

// Less than or equal
console.log(5 <= 5) // true
console.log(5 <= 6) // true
console.log(5 <= 2) // false
```
