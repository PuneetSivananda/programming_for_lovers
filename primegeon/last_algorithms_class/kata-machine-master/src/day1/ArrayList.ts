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
    insertAt(item: T, idx: number): void {
        if (this.length == this.nums.length) {
            return;
        }
        this.nums.splice(idx, 0, item);
        this.length++;
    }
    append(item: T): void {
        if (this.length < this.nums.length) {
            this.nums.push(item);
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        if (this.nums.includes(item)) {
            this.length--;
            return this.nums.splice(this.nums.indexOf(item), 1)[0];
        } else {
            return undefined;
        }
    }

    get(idx: number): T | undefined {
        console.log(this.nums, idx, this.nums[idx]);
        return this.nums[idx];
    }
    removeAt(idx: number): T | undefined {
        const value = this.nums[idx];
        this.nums.splice(idx, 1);
        this.length--;
        return value;
    }
}

const list = new ArrayList(5);
list.append(5);
list.append(7);
list.append(9);

// expect(list.get(2)).toEqual(9);
// expect(list.removeAt(1)).toEqual(7);
// expect(list.length).toEqual(2);

list.append(11);
// expect(list.removeAt(1)).toEqual(9);
// expect(list.remove(9)).toEqual(undefined);
// expect(list.removeAt(0)).toEqual(5);
// expect(list.removeAt(0)).toEqual(11);
// expect(list.length).toEqual(0);

list.prepend(5);
list.prepend(7);
list.prepend(9);

// expect(list.get(2)).toEqual(5);
// expect(list.get(0)).toEqual(9);
// expect(list.remove(9)).toEqual(9);
// expect(list.length).toEqual(2);
// expect(list.get(0)).toEqual(7);
console.log(list);
