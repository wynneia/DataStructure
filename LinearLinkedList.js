class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    remove(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.append(data);
    }

    pop() {
        if (!this.list.head) return null;
        const removed = this.list.head.data;
        this.list.head = this.list.head.next;
        return removed;
    }

    peek() {
        if (!this.list.head) return null;
        return this.list.head.data;
    }

    isEmpty() {
        return !this.list.head;
    }
}

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(data) {
        this.list.append(data);
    }

    dequeue() {
        if (!this.list.head) return null;
        const removed = this.list.head.data;
        this.list.head = this.list.head.next;
        return removed;
    }

    peek() {
        if (!this.list.head) return null;
        return this.list.head.data;
    }

    isEmpty() {
        return !this.list.head;
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.print(); 

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
