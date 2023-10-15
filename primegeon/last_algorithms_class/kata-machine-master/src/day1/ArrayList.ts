export default class ArrayList<T> {
    public length: number;
    private nums: T[];

    constructor(length: number) {
        this.length = length;
        this.nums = [];
    }

    prepend(item: T): void {
        if (this.length == this.nums.length) {
            return;
        }
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        if (this.length < this.nums.length) {
            this.nums.push(item);
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        if (this.nums.includes(item)) {
            return this.nums.splice(this.nums.indexOf(item), 1)[0];
        } else {
            return undefined;
        }
    }

    get(idx: number): T | undefined {
        return this.nums[idx];
    }
    removeAt(idx: number): T | undefined {
        const value = this.nums[idx];
        this.nums.splice(idx, 1);
        return value;
    }
}
