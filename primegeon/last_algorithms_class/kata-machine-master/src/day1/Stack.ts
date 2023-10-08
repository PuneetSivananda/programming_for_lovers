type Node<T> = {};

export default class Stack<T> {
    public length: number;

    constructor() {}

    push(item: T): void {
        if (this.nums.length === this.length) {
            throw Error("The Array is full cannot push");
        }
        this.length = this.length + 1;
        this.nums.push(item);
    }

    pop(): T | undefined {
        const head = this.nums[this.length - 1];
        this.length = this.length - 1;
        return head;
    }

    peek(): T | undefined {
        return this.nums[this.length - 1];
    }
}
