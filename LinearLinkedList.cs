using System;

public class Node {
    public int Data { get; set; }
    public Node Next { get; set; }

    public Node(int data) {
        Data = data;
        Next = null;
    }
}

public class LinkedList {
    private Node head;

    public LinkedList() {
        head = null;
    }

    public void Append(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node current = head;
        while (current.Next != null) {
            current = current.Next;
        }
        current.Next = newNode;
    }

    public void Remove(int data) {
        if (head == null) {
            return;
        }
        if (head.Data == data) {
            head = head.Next;
            return;
        }
        Node current = head;
        while (current.Next != null) {
            if (current.Next.Data == data) {
                current.Next = current.Next.Next;
                return;
            }
            current = current.Next;
        }
    }

    public void PrintList() {
        Node current = head;
        while (current != null) {
            Console.Write(current.Data + " ");
            current = current.Next;
        }
        Console.WriteLine();
    }
}

class Program {
    static void Main(string[] args) {

        LinkedList linkedList = new LinkedList();

        linkedList.Append(1);
        linkedList.Append(2);
        linkedList.Append(3);
        linkedList.Append(4);

        Console.Write("Linked list before removal: ");
        linkedList.PrintList();

        linkedList.Remove(3);

        Console.Write("Linked list after removal: ");
        linkedList.PrintList();
    }
}
