// Stack is a linear data structure in which addition or removal of element follows a particular order i.e. 
// LIFO(Last in First Out) AND FILO(First in Last Out).


//here I am making a class named as Stack


class Stack {
    //it a constructor function it will directly call whenever any object will be creating

    constructor() {
            this.array = [];
        }
        //push method will add a element at the end of the stack

    push(element) {
            this.array.push(element);

        }
        //pop method will remove a element from the end of the stack
    pop() {
            if (this.array.length == 0) {
                return "Underflow";
            } else {
                this.array.pop();
            }
        }
        //peek will show the top most element of the stack
    Peek() {
            return this.array[this.array.length - 1];
        }
        //isEmpty will check whether the stack is empty or not

    isEmpty() {
            return this.array.length == 0;
        }
        //Showstack will give us a view of the stack
    ShowStack() {
        let String = "";
        for (let item = 0; item < this.array.length; item++) {
            String += this.array[item] + " ";

        }
        return String;
    }
}


var stack = new Stack();
stack.push(12);
stack.push(15);
stack.push(30);
stack.pop();
console.log(stack.Peek());
console.log(stack.ShowStack());
console.log(stack.isEmpty());