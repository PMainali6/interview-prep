class TaskRunner {
  constructor(capacity) {
    this.capacity = capacity;
    this.concurrentTask = 0;
    this.queue = [];
  }

  push(task) {
    this.queue.push(task);
    this.concurrentTask++;
    this.run();
  }

  run() {
    if (this.concurrentTask <= this.capacity) {
      const task = this.queue.shift();
      task().then((res) => {
        this.checkoutResponse(res);
      });
    }
  }

  checkoutResponse(res) {
    console.log(res);
    this.concurrentTask--;
    if (this.concurrentTask <= this.capacity && this.queue.length != 0) {
      this.run();
    }
  }
}

export default TaskRunner;
