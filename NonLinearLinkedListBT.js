class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (data < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.data);
            this.inOrderTraversal(node.right);
        }
    }

    breadthFirstTraversal() {
        const queue = [];
        if (this.root) queue.push(this.root);

        while (queue.length > 0) {
            const currentNode = queue.shift();
            console.log(currentNode.data);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log("In-order traversal:");
binaryTree.inOrderTraversal();

console.log("\nBreadth-first traversal:");
binaryTree.breadthFirstTraversal();
