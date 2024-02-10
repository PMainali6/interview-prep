import LinkedList from "./list.js";

export default function () {
  let l1 = new LinkedList();

  l1.insert(1);
  l1.insert(2);
  l1.insert(3);
  l1.insert(4);
  l1.insert(5);

  l1.print();
}
