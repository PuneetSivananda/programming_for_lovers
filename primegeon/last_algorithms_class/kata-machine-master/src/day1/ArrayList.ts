export default class ArrayList<T> {
    public length: number;
    private nums: T[];

    constructor() {
        this.nums = [];
    }

    prepend(item: T): void {
        if (this.length == this.nums.length) {
            return;
        }
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
