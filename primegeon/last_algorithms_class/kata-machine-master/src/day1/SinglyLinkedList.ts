class Node {
    public next: Node | null;
    public value: number;
    constructor(value: number) {
        this.next = null;
        this.value = value;
    }
}
export default class SinglyLinkedList<T> {
    public length: number;
    public items: Node[];
    constructor() {}

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
