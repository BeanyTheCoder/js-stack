// start in quokka.js extension(if you don't have it yet, install it from Extensions Tab in VS code): 
// press ctrl+shift+p, then in the search box, type "Quokka.js: Start On Current File" and hit enter

// or alternatively, use node.js:
// press ctrl+shift+` to start a new terminal, then navigate into this folder(using cd) and type "node script.js"

class Stack {
  constructor(initialValue) {
    // if initialValue is not an array, or no value is passed, just set this.dataStore to an empty array(instead of undefined or others)
    if (Array.isArray(initialValue) !== true) {
      this.dataStore = [];
    } else {
      this.dataStore = initialValue;
    }
    this.size = this.dataStore.length;
  }

  push(value) {
    // if value passed in an array, destructure and add each element individually
    if (Array.isArray(value)) {
      value.forEach((element) => {
        this.dataStore[this.stackSize++] = element;
      });
    } else {
      // else, add the value
      this.dataStore[this.stackSize++] = value;
    }
  }

  pop() {
    // removes element at the end of the stack, decrements this.stackSize, then return the value removed
    return this.dataStore.splice(this.stackSize-- - 1, 1);
  }

  peek() {
    // returns the value the end(technically called top) of the stack
    return this.dataStore[this.stackSize - 1];
  }

  clear() {
    // clears the stack
    this.dataStore = [];
  }
}
