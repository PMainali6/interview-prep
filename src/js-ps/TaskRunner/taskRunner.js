class TaskRunner {
  constructor(capacity) {
    this.capacity = capacity;
    this.inProgressTask = 0;
    this.queue = [];
    this.currentIdx = 0;
  }

  push(task) {
    this.queue.push(task);
    this.run();
  }

  run() {
    while (
      this.currentIdx < this.queue.length &&
      this.inProgressTask < this.capacity
    ) {
      const task = this.queue[this.currentIdx];
      this.currentIdx++;

      task().then((res) => this.checkoutResponse(res));
    }
  }

  checkoutResponse(res) {
    this.inProgressTask--;
    console.log(res);
    this.run();
  }
}

export default TaskRunner;
