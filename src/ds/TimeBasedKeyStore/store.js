class TimeMap {
  constructor() {
    this.store = new Map();
  }

  set(key, value, timestamp) {
    if (!this.store.has(key)) {
      this.store.set(key, [[value, timestamp]]);
    } else {
      const list = this.store.get(key);
      this.store.set(key, [...list, [value, timestamp]]);
    }
  }

  get(key, timestamp) {
    if (!this.store.has(key)) {
      return "";
    }

    const list = this.store.get(key);
    return this.search(list, timestamp);
  }

  search(list, timestamp) {
    let low = 0;
    let high = list.length;
    let value;

    while (low < high) {
      let mid = Math.floor((high - low) / 2) + low;

      if (list[mid] <= timestamp) {
        value = list[mid];
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return value;
  }
}

export default TimeMap;
