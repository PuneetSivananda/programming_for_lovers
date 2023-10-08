type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

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
        return this.head?.value;
    }
}
