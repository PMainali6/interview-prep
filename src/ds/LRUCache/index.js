import LRUCache from "./LRUCache.js";

export default function () {
  const lru = new LRUCache(3);

  lru.set("a", "apple");
  lru.set("b", "ball");
  lru.set("c", "cat");
  console.log("LRU: ", Array.from(lru.print()));
  lru.get("a");
  lru.set("d", "Dick");
  console.log("LRU: ", Array.from(lru.print()));
}
