const Stack = require('./lib/Stack');

const newStack = new Stack();

newStack.push(3);
newStack.push(2);
newStack.push(1);
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());
newStack.pop();
newStack.pop();
console.log(newStack.peek());
console.log('------------------------------------------------------------------');

let string = "[](){}(}";
console.log(newStack.vlidateBrackets(string));
