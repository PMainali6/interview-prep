export default function () {
  const obj1 = new ArrayWrapper([1, 2]);
  const obj2 = new ArrayWrapper([3, 4]);

  console.log(obj1 + obj2);

  console.log(String(obj1));
  console.log(String(obj2));
}

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }
  valueOf() {
    return this.nums.reduce((acc, el) => acc + el, 0);
  }
  toString() {
    return `[${String(this.nums)}]`;
  }
}
