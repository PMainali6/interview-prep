class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    let obj = this.cache.get(key);

    if (!obj) {
      // first time setting
      const timer = setTimeout(() => {
        this.cache.delete(key);
      }, duration);

      this.cache.set(key, { value, timer });
      return false;
    } else {
      const { _value, timer } = obj;
      clearTimeout(timer);
      const newTimer = setTimeout(() => {
        this.cache.delete(key);
      }, duration);

      this.cache.set(key, { value, timer: newTimer });
      return true;
    }
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    return this.cache.get(key).value;
  }

  count() {
    return this.cache.size;
  }
}

export default TimeLimitedCache;
