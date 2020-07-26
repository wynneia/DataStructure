#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* newNode(int data) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = data;
    node->next = NULL;
    return node;
}

void append(struct Node** head_ref, int data) {
    struct Node* new_node = newNode(data);
    if (*head_ref == NULL) {
        *head_ref = new_node;
        return;
    }
    struct Node* last = *head_ref;
    while (last->next != NULL)
        last = last->next;
    last->next = new_node;
}

void removeNode(struct Node** head_ref, int key) {
    struct Node* temp = *head_ref, *prev;

    if (temp != NULL && temp->data == key) {
        *head_ref = temp->next;
        free(temp);
        return;
    }

    while (temp != NULL && temp->data != key) {
        prev = temp;
        temp = temp->next;
    }

    if (temp == NULL) return;

    prev->next = temp->next;
    free(temp);
}

void printList(struct Node* node) {
    while (node != NULL) {
        printf("%d ", node->data);
        node = node->next;
    }
    printf("\n");
}

int main() {
    struct Node* head = NULL;
    
    append(&head, 1);
    append(&head, 2);
    append(&head, 3);
    append(&head, 4);
    
    printf("Linked list before removal: ");
    printList(head);

    removeNode(&head, 3);
    
    printf("Linked list after removal: ");
    printList(head);

    return 0;
}
