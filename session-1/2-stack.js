class Stack {
  stack = [];

  pop() {
    if (this.stack.length > 0) {
      this.stack.pop();
    } else {
      console.log("Stack is empty");
    }
  }

  push(input) {
    if (this.isString(input)) {
      this.stack.push(input);
    } else if (input.constructor === Array) {
      let filteredStrings = input.filter((element) => this.isString(element));
      filteredStrings.map((string) => this.stack.push(string));
    }
  }

  check() {
    console.log(this.stack);
  }

  isString(input) {
    return typeof input == "string";
  }
}
