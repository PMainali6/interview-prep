export default function () {
  const emitter = new EventEmitter();

  function onClickCallback() {
    console.log(99);
  }

  const sub = emitter.subscribe("onClick", onClickCallback);
  emitter.emit("onClick");
  sub.unsubscribe();
  emitter.emit("onClick");
}

class EventEmitter {
  constructor() {
    this.map = new Map();
  }
  subscribe(event, cb) {
    if (!this.map.has(event)) {
      this.map.set(event, [cb]);
    } else {
      const cbList = this.map.get(event);
      this.map.set(event, [...cbList, cb]);
    }

    return {
      unsubscribe: () => {
        const cbList = this.map.get(event);
        const newCbList = cbList.filter((oldCb) => oldCb !== cb);
        if (newCbList.length === 0) {
          this.map.delete(event);
        } else {
          this.map.set(event, newCbList);
        }
      },
    };
  }

  emit(event, args = []) {
    if (!this.map.has(event)) {
      return;
    }

    const cbList = this.map.get(event);
    cbList.forEach((cb) => {
      cb(...args);
    });
  }
}
