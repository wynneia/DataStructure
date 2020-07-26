class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;
        for (let connectedVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, connectedVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');

console.log(graph.adjacencyList);

graph.removeEdge('A', 'B');
console.log(graph.adjacencyList);

graph.removeVertex('C');
console.log(graph.adjacencyList);
