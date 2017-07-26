export interface node {
    value: string;
    next: node | null;
}
export default function createList(values: string[]): node {
    var head: node, cur: node;
    for (let i = 0; i < values.length; i++) {
        if (!head) {
            head = { value: values[i], next: null }
            cur = head;
        }
        else {
            cur.next = { value: values[i], next: null };
            cur = cur.next;
        }
    }
    return head;
}