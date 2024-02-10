// import PriorityExpiryCache, { Item } from "./cache.js";
import PriorityExpiryCache, { Item } from "./cache2.js";

export default function run() {
  const priorityExpiryCache = new PriorityExpiryCache(5);
  priorityExpiryCache.setItem(new Item("A", "val1", 5, 100), 0);
  priorityExpiryCache.setItem(new Item("B", "val2", 15, 3), 0);
  priorityExpiryCache.setItem(new Item("C", "val3", 5, 10), 0);
  priorityExpiryCache.setItem(new Item("D", "val4", 1, 15), 0);
  priorityExpiryCache.setItem(new Item("E", "val5", 5, 150), 0);
  priorityExpiryCache.getItem("C");
  console.log(Array.from(priorityExpiryCache.getKeys()));
  priorityExpiryCache.evictItem(5); // B
  console.log(Array.from(priorityExpiryCache.getKeys()));
  priorityExpiryCache.evictItem(5); // D
  console.log(Array.from(priorityExpiryCache.getKeys()));
  priorityExpiryCache.evictItem(5); // A
  console.log(Array.from(priorityExpiryCache.getKeys()));
  priorityExpiryCache.evictItem(5); // E
  console.log(Array.from(priorityExpiryCache.getKeys()));
}
