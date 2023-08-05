# JS Stack 🚀

Stack data structure implemented in JavaScript

## Features ✨

A stack in JavaScript is a linear data structure that follows the Last-In-First-Out (LIFO) principle, where elements are both added and removed from the top, and can be used for a variety of tasks.

Here are some features:

### Adding elements:

```js
// Create a new stack instance
const myStack = new Stack();

// Push array of elements onto the stack
myStack.push([10, 20, 30]);

// Or just push one element
myStack.push(40);
console.log(myStack.dataStore); // Output: [10, 20, 30, 40]
```

### Removing Elements:

```js
// Pop elements from the stack
const removedElement = myStack.pop();

console.log(removedElement); // Output: 40
console.log(myStack.dataStore); // Output: [10, 20, 30]
```

### Peeking at the Top Element:

```js
// Peek at the top element
const topElement = myStack.peek();
console.log(topElement); // Output: 30
```

### Emptying stack:

```js
myStack.clear();
console.log(myStack.dataStore); // Output: []
```

## Installation 🛠️

1. Clone the repository using `git clone https://github.com/BeanyTheCoder/js-stack.git`
2. Navigate to the project directory using `cd  js-stack`

3. Open `script.js` using any text editor of your choice
4. Run the file using either
   _Quokka.js_ or _Node.js_ (instructions for both in project file)

## Usage 🚀

Feel free to use this project however you may like. I will provide a few examples in the future as a starting basis, but for now, let's explore some of the potential applications:

- Function Call Tracking: Keep track of function calls in your application and implement features like "undo" or "redo" by using a stack to manage the call history.

- Expression Evaluation: Utilize the stack data structure to evaluate mathematical expressions efficiently, handling operators and operands in the correct order.

- Backtracking Algorithms: Implement backtracking algorithms, such as maze-solving or game simulations, where a stack helps you remember and backtrack through decisions.

- Browser History Management: Create a simplified browser history functionality using a stack to manage the visited URLs and enable forward and backward navigation.

- Text Editors: Develop text editors or code editors that use stacks to manage indentation, parentheses matching, and undo/redo functionalities.

- Call Stack Simulation: Simulate the call stack behavior of a programming language by using a stack to manage function calls and their local variables.

## Technologies Used 🛠️

- JavaScript
- _Quokka.js_ & _Node.js_

## Roadmap 🗺️

I plan to add proper use cases in this repo, just to show off the insane potential of stacks> I'll probably do that next week, if i get enough time.

## License 📝

This project is licensed under the [License Name](link-to-license-file).

## Contact 📧

For any questions or feedback, feel free to reach out to me at alexanderafoko@gmail.com.
