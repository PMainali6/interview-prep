export default function () {
  let arr = [1, 2, 3];

  console.log("Array: ", arr);
  console.log("Last of array: ", arr.last());
}

Array.prototype.last = function () {
  const arrayInput = this;

  if (arrayInput.length === 0) {
    return -1;
  }

  return arrayInput[arrayInput.length - 1];
};
