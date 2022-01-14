---
title: 4. Conditionals - Part 2
date: "2022-01-12T22:12:03.284Z"
description: "Learn what a switch statement is and how to use it as a viable alternative to if...else if statements to also perform decisions in your code."
---

Video: https://youtu.be/KseMGAfQgJk

Code from this video: https://jsfiddle.net/3emac8Lz/4/

---

### Switch statement summary

As you will come to see in due time, in programming there are many ways of doing the same thing - this is especially true when it comes to conditionals. In the previous section we looked at how we can make decisions in our code using if statements but there's another way we can achieve the aforementioned - enter the switch statement.

The switch statement has some similarities to the `if...else if` statement as it too can be used to test an input (expression) against multiple cases (conditions).

When you expect to have complicated and lengthy conidtions then you may consider using the switch statement over the if...else if statement because it has a cleaner and more compact structure.

#### First look

```javascript
switch ("red") {
  case "blue":
    // ❌ This will not be executed because red does not equal blue
    console.log("Your favorite color is blue")
    break
  case "purple":
    // ❌ This will not be executed because red does not equal purple
    console.log("Your favorite color is purple")
    break
  case "red":
    // ✅ This will be executed because red does equal red
    console.log("Your favorite color is red")
    break
  default:
    // ❌ This will not be executed because in the previous case a match has occured
    console.log("Idk what your favorite color is")
    break
}
```

Lets break this down:

- The expression (input) in the above example is the string "red"
- The string "red" will be compared with the values of each case
- If there is a match then the corresponding block of code for that case will be executed and the break statement will break execution out of the switch statement so all following cases will be skipped.
- If there was no match then code defined in the default case will be executed.

So we can look at each case in the switch statement as follows:

- `case "blue"` - if "red" equals "blue" then print to console "Your favorite color is blue"
- `case "purple"` - if "red" equals "purple" then print to console "Your favorite color is purple"
- `case "red"` - if "red" equals "red" then print to console "Your favorite color is red"
- `default` - if no match has occured then print to console "Idk what your favorite color is"

Here's how this would look when using an if...else if statement:

```javascript
if ("red" === "blue") {
  // ❌ This will not be executed because red does not equal blue
  console.log("Your favorite color is blue")
} else if ("red" === "purple") {
  // ❌ This will not be executed because red does not equal purple
  console.log("Your favorite color is purple")
} else if ("red" === "red") {
  // ✅ This will be executed because red does equal red
  console.log("Your favorite color is red")
} else {
  // ❌ This will not be executed because a prior condition has already resolved to true
  console.log("Idk what your favorite color is")
}
```

**Notice the `===`?** This is called the strict equality operator. In the section where we went over operators we covered the equality operator `==` which, if you recall, checks if two values are equal. In the same way, the strict equality operator `===` will check if two values are equal, however the types of the values must also be the same for them to be considered equal. This is important to note because the switch statement uses the strict equality operator for case comparisons.

**Using the == operator (Equality):**

```javascript
"24" == 24 // true because "24" is converted to 24 and then compared
```

The equality operator will automatically try to convert the values to the same types before comparing as such in the above example the string "24" will be converted to a number.

**Using the === operator (Strict Equality):**

```javascript
"24" === 24 // false because types are different - "24" (string) and 24 (number)
```

When using the strict equality operator no implicit type conversion will occur and as such the above comparison will fail because we are comparing a string "24" with a number 24 - two completely different type of values.

#### More examples

Example where default case is executed:

```javascript
switch ("black") {
  case "blue":
    // ❌ This will not be executed because black does not equal blue
    console.log("Your favorite color is blue")
    break
  case "purple":
    // ❌ This will not be executed because black does not equal purple
    console.log("Your favorite color is purple")
    break
  case "red":
    // ❌ This will not be executed because black does equal red
    console.log("Your favorite color is red")
    break
  default:
    // ✅ This will be executed because of no previous match
    console.log("Idk what your favorite color is")
    break
}
```

Here's an interesting example where break statements are missing:

```javascript
switch ("red") {
  case "blue":
    // ❌ This will not be executed because red does not equal blue
    console.log("Your favorite color is blue")
  case "purple":
    // ❌ This will not be executed because red does not equal purple
    console.log("Your favorite color is purple")
  case "red":
    // ✅ This will be executed because red does equal red
    console.log("Your favorite color is red")
  default:
    // ✅ This will also be executed because in the previouse case we had no break
    console.log("Idk what your favorite color is")
}
```

Lets break down what will happen in this example. If you were to run this code then you should expect two `console.log` to be executed:

- console.log("Your favorite color is red")
- console.log("Idk what your favorite color is")

We can see that case "red" and the default case will both be executed due to no break statement being defined in the "red" case. **So just keep in mind that while a break statement is not required in a switch statement, the execution of code may behave unexpectedly when break statements are omitted.**

### That's it, for now!

That's all for now but there's still so much more to come. So until then I just want to thank you for stopping by and if you have any questions please never hesitate to contact me. Remember, you can always send your questions to my email @ rodgetech@gmail.com
