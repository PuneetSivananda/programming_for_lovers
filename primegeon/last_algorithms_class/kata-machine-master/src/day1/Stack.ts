export default class Stack<T> {
    public length: number;
    private nums: T[];

    constructor() {
        this.nums = [];
    }

    push(item: T): void {
        if (this.nums.length === this.length) {
            throw Error("The Array is full cannot push");
        }
        this.length = this.length + 1;
        this.nums.push(item);
    }
    pop(): T | undefined {}
    peek(): T | undefined {}
}
