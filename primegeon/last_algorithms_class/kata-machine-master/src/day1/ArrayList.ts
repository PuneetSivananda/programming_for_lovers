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
        this.length = this.nums.length - 1;
        return this.nums.splice(this.nums.indexOf(item), 1)[0];
    }

    get(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) throw Error("Array out of bounds");
        else return this.nums[idx];
    }
    removeAt(idx: number): T | undefined {
        this.length = this.nums.length - 1;
        return this.nums.splice(idx, 1)[0];
    }
}
