"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createList(values) {
    var head, cur;
    for (let i = 0; i < values.length; i++) {
        if (!head) {
            head = { value: values[i], next: null };
            cur = head;
        }
        else {
            cur.next = { value: values[i], next: null };
            cur = cur.next;
        }
    }
    return head;
}
exports.default = createList;
