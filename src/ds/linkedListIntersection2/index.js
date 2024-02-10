import { isIntersecting } from "./isIntersecting.js";

export default function () {
  const strMap = "a->b,r->s,b->c,x->c,q->r,y->x,w->z";
  const input = ["a,q,r", "a,c,r", "y,z,a,r", "a,w"];

  //   const strMap = "A->B,G->B,B->C,C->D,D->E,H->J,J->F";
  //   const input = ["A,G,E", "H,A"];

  const linkedList = new Map();

  const arr = strMap.trim().split(",");

  arr.forEach((pair) => {
    const [key, value] = pair.split("->");
    linkedList.set(key, value);
  });

  for (let i = 0; i < input.length; i++) {
    const valueList = input[i].split(",");
    console.log(`${valueList}: ${isIntersecting(valueList, linkedList)}`);
  }
}
