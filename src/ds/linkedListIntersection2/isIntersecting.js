// export function isIntersecting(valueList, linkedList) {
//   let isIntersecting = false;
//   // set of last ending node in for each starting node
//   let finalNodeList = new Set();

//   for (let node of valueList) {
//     let nextNode = node;
//     let lastNode = node;
//     // all the nodes traversed from a single node
//     // if there is repeated node, the linked list is cyclic
//     let seenNodeList = new Set();

//     while (nextNode != null) {
//       if (seenNodeList.has(nextNode)) {
//         throw new Error("Cycle found in linked list");
//       } else {
//         seenNodeList.add(nextNode);
//       }

//       lastNode = nextNode;
//       nextNode = linkedList.get(nextNode) || null;
//     }

//     if (finalNodeList.has(lastNode)) {
//       isIntersecting = true;
//     } else {
//       finalNodeList.add(lastNode);
//     }
//   }

//   return isIntersecting;
// }

export function isIntersecting(valueList, linkedList) {
  // if already exist then, intersecting
  let finalNodeList = new Set();
  let isIntersecting = false;

  for (let value of valueList) {
    let nextNode = value;
    let lastNode = value;
    // if already seen then loop
    let seenNodeList = new Set();

    while (nextNode !== null) {
      if (seenNodeList.has(nextNode)) {
        throw new Error("Loop");
      } else {
        seenNodeList.add(nextNode);
      }

      lastNode = nextNode;
      nextNode = linkedList.get(nextNode) || null;
    }

    if (finalNodeList.has(lastNode)) {
      isIntersecting = true;
    } else {
      finalNodeList.add(lastNode);
    }
  }

  return isIntersecting;
}
