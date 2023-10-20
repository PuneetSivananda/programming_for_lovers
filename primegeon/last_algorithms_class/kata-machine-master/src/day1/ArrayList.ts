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
        this.nums.unshift(item);
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (this.length == this.nums.length) {
            return;
        }
        this.nums.splice(idx, 0, item);
        this.length++;
    }
    append(item: T): void {
        this.nums.push(item);
        this.length++;
    }
    remove(item: T): T | undefined {
        this.length--;
        return this.nums.splice(this.nums.indexOf(item), 1)[0];
    }

    get(idx: number): T | undefined {
        return this.nums[idx - 1];
    }
    removeAt(idx: number): T | undefined {
        const value = this.nums[idx];
        this.nums.splice(idx, 1);
        this.length--;
        return value;
    }
}
