---
title: Functions
date: "2022-02-06T22:12:03.284Z"
description: "Learn what functions are and how we can use them to write reusable code and eliminate redundancy."
---

Video:

Code from this video:

---

### Functions summary

Lets say you're building a website and you have some piece of code that handles signing in a user to your site. Now imagine you have multiple locations on your site that a user can sign in from; will you just repeat your sign in code all over the place to faciliate this? Of course you can do this, but this will lead you to have duplicated code all over the place and if you ever need to alter you sign in logic then you will also need to this everywhere else you've defined your login code.

This is where functions can help. Functions are like a container for a block of code that we can assign a name to and then execute whatever code is contained in the function by invoking the function - that is calling it by the name we gave it. This allows us to write code that we expect to use in multiple places in a reusable way instead of repeating the same code all over the place.

So in the case of the aforementioned login example, instead of defining the same login code repeatedly we can instead create a new function and give it a descriptive name such as `login` and then simply place our login code in the body of the function. Now whenever we want to login a user we can simply call the login function.

#### Creating a function

The following is the basic structure of a function in javascript.

```javascript
function functionName() {
  // function body
}
```

Lets break this down:

- To begin we use the `function` keyword followed by the name of the function.
- After the name, we add a pair of parentheses `()`. Further down we will see how within the parentheses we can pass values to a function.
- Then we define the body of the function using a pair of curly braces `{}`. This is where you place your code.

Now lets look at an example that creates a function which prints a string to the console and then how we execute the function:

```javascript
// Create the function
function hello() {
  console.log("Hello")
}

// Execute the function
hello()
```

In this example we create a simple hello function that just prints the string "Hello" to the console. After that we execute the function by calling the function by its name, notice how we do this -> `hello()`. To call a function we type the function name followed by a pair of parentheses.

The important thing to note here is that simply creating a function on its own will not execute the code that is defined in the body of the function, to do this you actually need to explicitly invoke the function by calling it by its name.

#### Passing values to a function

Sometimes the logic we place in a function will depend on one or multiple external values - that is values which are not defined in the body of the function. We can do this by passing such values within the parentheses `()` of the function. We usually call these values function parameters.

With that in mind, lets expand on our hello function from the previous example so that it's a little bit more flexible. Instead of it being limited to only printing the string `"Hello"`, lets update it to print `"Hello, name"` where name can be any name we want.

Lets see how we can do this:

```javascript
// Create the function with one parameter
function hello(name) {
  console.log("Hello " + name)
}

// Execute the function passing in a value for name
hello("Luis")
```

- Instead of having the pair of parentheses `()` being empty, we specify a single name parameter.
- The line `console.log("Hello " + name)` will append the value of the name parameter onto the end of the string "Hello "
- We execute the function passing in the string value "Luis" to the function. The name parameter will now have the string "Luis" as its value. **Values passed to a function are usually called arguments**.
- Finally, when this function is executed `console.log("Hello " + name)` will be the same as `console.log("Hello " + "Luis")` producing to the console the string `"Hello Luis".`

**We've only been executing this function once but we can execute it as many times as we want:**

```javascript
// Create the function with one parameter
function hello(name) {
  console.log("Hello " + name)
}

// Execute the function 3 times
hello("Luis")
hello("Jon")
hello("Smith")
```

Running this example would print the following to the console:

```sh
Hello Luis
Hello Jon
Hello Smith
```

This is the power of using functions. We can reuse a function anywhere else in our code by simply calling it by its name.

##### Passing multiple values to a function

So far we've only seen how to pass a single value to a function but we can pass as much values as we want by having mutliple parameters.

Lets see an example of this by creating a new function that will add two values and print the sum to the console:

```javascript
// Create a function with two parameters
function add(a, b) {
  const sum = a + b
  console.log("Sum: " + sum)
}

// Execute the function
add(2, 2)
```

Output we get when executing this function:

```sh
Sum: 4
```

As you can see in this example we are creating a function that receives multiple parameters `add(a, b)` which are comma separated. Here we are accepting two parameters but as mentioned, you can have a function accept as much parameters as you'd like.

#### Returning a value from a function

So far we've only looked a functions that contain a block of code which can be executed and that's it. However, a function can optionally return a value. If we consider our add function from the previous example, we can have it return the sum of two values instead of just printing it to the console.

Here's how that would look like:

```javascript
function add(a, b) {
  const sum = a + b
  return sum
}

add(2, 2)
```

Notice the addition of the `return` keyword followed by the value we want to return, in this case the `sum` variable. This value is returned to the caller of the function. If we ran this example, nothing would be outputted to the console. If we want to print the value that is returned from the function we need to receive the value somehow. We can store this value in a variable.

```javascript
function add(a, b) {
  const sum = a + b
  return sum
}

// Store the return value in a variable
const total = add(2, 2)

console.log(total)
```

Result:

```sh
4
```

As previously mentioned, the caller of the function receives whatever value that function returns. In this example, invoking the add function runs the computation defined in the function and finally returns a value that is then stored in the total variable.

Returning a value from a function is a commmon practice since sometimes the computation or logic peformed in a function usually yields a result. This result may potentially be useful elsewhere in your code so when you need a way of getting that value from a function you can simply return it.

It's important to note that code you define in the function, after you return will be skipped.
