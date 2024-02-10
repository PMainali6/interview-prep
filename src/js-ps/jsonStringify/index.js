export default function () {
  const input = [
    [{ b: "hello", c: false, d: ["a", "b", "c"] }],
    [{ b: "world", c: true, d: ["a", "b", "c"] }],
  ];

  console.log(jsonStringify(input));
}

function jsonStringify(object) {
  if (object === null || object === undefined) {
    return String(object);
  }

  // array
  if (Array.isArray(object)) {
    const finalArray = object.map(jsonStringify);
    return `[${String(finalArray.join(","))}]`;
  }
  // object
  if (typeof object === "object") {
    const keys = Object.keys(object);

    const keyPair = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${String(keyPair.join(","))}}`;
  }

  // string
  if (typeof object === "string") {
    return `"${String(object)}"`;
  }
  // boolean & number
  return String(object);
}
