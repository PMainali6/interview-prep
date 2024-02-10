export default function () {
  const user = {
    name: "John",
    address: {
      primary: {
        house: "109",
        street: {
          main: "21",
          cross: "32",
        },
      },
    },
  };

  console.log(flattenObject(user));
}

function flattenObject(obj, parent = "") {
  let finalObj = {};

  for (let key in obj) {
    let newKey = parent === "" ? key : `${parent}.${key}`;

    if (
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      let tempObj = flattenObject(obj[key], newKey);
      finalObj = {
        ...finalObj,
        ...tempObj,
      };
    } else {
      finalObj = {
        ...finalObj,
        [newKey]: obj[key],
      };
    }
  }

  return finalObj;
}
