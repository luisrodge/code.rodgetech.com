---
title: 5. Loops
date: "2022-01-19T22:12:03.284Z"
description: "Learn what loops are and how we can use them to execute any code over and over for as much as we want up until a condition has been met"
---

Video:

Code from this video:

---

### Loops summary

Using loops we can run a certain block of code over and over for as many times as we want up until some condition has been satisfied or we can have it running (looping) forever - we usually refer to this as an infinite loop.

In javascript and most other programming languages there are diffirent types of loops that all fundamentally do the same thing - repeat the execution of some block of code over and over again.

The main ones that we will be focusing on are the following:

- while loop
- do while loop
- for loop

Note that there are other types of loops besides the aforementioned but a solid understanding of these three will suffice for now.

#### while loop

Lets look at the while loop first. The while loop will run whatever code is specified in the body of the loop so long as a given condition is satisfied. In order words, the code defined in the body of the while loop will run over and over again until the specified condition is no longer true.

The following is the basic structure of a while loop:

```javascript
while (condition) {
  // code you want to run repeatedly
}
```

With the while loop the condition is evaluated first, before executing the code that is defined in the body. So if the condition is true the body will be executed and if the condition is false the body will be skipped.

Now lets take a look at a real example:

```javascript
let i = 0

while (i < 5) {
  console.log("Hello world")
}
```

Here we have a basic while loop that will log "Hello world" to the console repeatedly. Notice in this example our condition is checking to see if the variable `i` is less than 5. As long as this condition is true the `console.log` will continue to be executed.

It's worth pointing out that `i` is usally refered to as an iterator variable because it serves as an input to the condition that will determine how many iterations will occur.

Now here's an interesting question - **how many times do you expect to see "Hello world" outputted to the console?**

You're wrong if you guessed 5 and your're right if you guessed infinitely. This while loop is an example of an infinite loop because while we are specifying a condition that is supposed to determine how many times the loop should repeat, our condition will always resolve to true because we aren't changing or incrementing the `i` variable so in the above example the condition `i < 5` will always be true because `0 < 5` is always true.

##### So how can we actually create a loop that will run X number of times instead of infinitely?

The answer is simple - we just need to ensure that our condition will, at some point, evaluate to false instead of always being true.

Lets use the previous example to show this:

```javascript
let i = 0

while (i < 5) {
  console.log("Hello world")
  i = i + 1 // Increment i by 1
}
```

Notice the addition of `i = i + 1 ` in the above example. Essentially what we're doing here is incrementing the variable `i` each time the loop runs.

This can be further broken down as follows given that the `i` variable has an initial value of 0:

- `while (0 < 5)` then `console.log("Hello world")` and then increment `i` (0) by one and loop again
- `while (1 < 5)` then `console.log("Hello world")` and then increment `i` (1) by one and loop again
- `while (2 < 5)` then `console.log("Hello world")` and then increment `i` (2) by one and loop again
- `while (3 < 5)` then `console.log("Hello world")` and then increment `i` (3) by one and loop again
- `while (4 < 5)` then `console.log("Hello world")` and then increment `i` (4) by one and loop again
- `while (5 < 5)` will evaluate to false so at this point the loop will stop executing here

As such we can now expect to see "Hello world" outputted to the console 5 times.

#### do while loop

With the while loop out of the way lets now take a look at another type of loop - the do while loop. The do while loop has some similarities to the while loop in that a condition will be used to determine how many times the loop should repeat. However, the difference between the two is that with the do while loop the condition is evaluated at the end of the loop instead of at the begining as it is done with the while loop. **This means that the code in a do while loop is guaranteed to run at least once.**

The following is the basic structure of a do while loop:

```javascript
do {
  // code you want to run repeatedly
} while (condition)
```

As you can see the way we define a do while loop is almost self explanatory in itself - do this over and over again until the specified condition is no longer true. So just like with the while loop the code in the do while loop will be executed repeatedly if the condition is true and end when the condition is false.

Example:

```javascript
let i = 0

do {
  console.log("Hello world")
  i = i + 1 // Increment i by 1
} while (i < 5)
```

By running this example we can expect to see "Hello world" outputted to console a total of 5 times.

#### for loop

Finally, lets have a look at the for loop. As with the previous types of loops, the for loop will run a block of code over and over until the given condition results to false.

The following is the basic structure of a for loop:

```javascript
for (initialization; condition; increment) {
  // code you want to run repeatedly
}
```

Notice the three expressions inside the parentheses `()`. These can be explained as follows:

- initialization - code defined here will be executed once before the first iteration. This is where you'd usually define the iterator variable to be used in the condition and increment expressions.
- condition - the condition that will determine when (if) the loop should stop.
- increment - this is usually the expression that increments the iterator variable.

Lets look at an example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Hello world")
}
```

In this example we can expect to see 5 output of "Hello world" in the console.

Notice the `i++`? When it comes to incrementing the iterator variable, we can usually do this in three ways:

- `i = i + 1` - this is how we've been doing it and we've previously covered this in the operators section.
- `i += 1` - a shorter way of incrementing by using the add and assignment operator.
- `i++` - the shortest way by always incrementing by 1.

#### Just one last important thing - decrementing

So far we've only been incrementing the iterator variable that is used in the condition protion of the loop. However, we can also do the opposite - this is called decrementing:

- `i = i - 1`
- `i -= 1`
- `i--`

Lets have at an example using the while loop:

```javascript
let i = 5

while (i > 0) {
  console.log("Hello world")
  i = i - 1 // Decrement i by 1
}
```

So in this example, instead of starting from 0 and incrementing by one we are starting from 5 and decrementing by 1. Notice how we also changed the condition from `i < 5` to `i > 0`.

This can be further broken down as follows given that the `i` variable has an initial value of 5:

- `while (5 > 0)` then `console.log("Hello world")` and then decrement `i` (5) by one and loop again
- `while (4 > 0)` then `console.log("Hello world")` and then decrement `i` (4) by one and loop again
- `while (3 > 0)` then `console.log("Hello world")` and then decrement `i` (3) by one and loop again
- `while (2 > 0)` then `console.log("Hello world")` and then decrement `i` (2) by one and loop again
- `while (1 > 0)` then `console.log("Hello world")` and then decrement `i` (1) by one and loop again
- `while (0 > 0)` will evaluate to false so at this point the loop will stop executing here

### That's it, for now!

That's all for now but there's still so much more to come. So until then I just want to thank you for stopping by and if you have any questions please never hesitate to contact me. Remember, you can always send your questions to my email @ rodgetech@gmail.com
