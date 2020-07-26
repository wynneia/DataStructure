class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }
        let current = this.head;
        while (current.next !== this.head) {
            current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
    }

    remove(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            if (this.head === this.head.next) {
                this.head = null;
            } else {
                current.next = this.head.next;
                this.head = this.head.next;
            }
            return;
        }
        let current = this.head;
        let prev = null;
        while (current.next !== this.head) {
            if (current.data === data) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
        if (current.data === data) {
            prev.next = this.head;
        }
    }

    print() {
        if (!this.head) return;
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }
}

const circularLinkedList = new CircularLinkedList();
circularLinkedList.append(1);
circularLinkedList.append(2);
circularLinkedList.append(3);
circularLinkedList.print();

circularLinkedList.remove(2);
circularLinkedList.print();
