import LRUCache from "./LRUCache.js";

function run() {
  const lru = new LRUCache(3);

  lru.set("a", "apple");
  lru.set("b", "ball");
  lru.set("c", "cat");
  lru.print();
  lru.get("a");
  lru.set("d", "Dick");
  lru.print();
}

export default run;
