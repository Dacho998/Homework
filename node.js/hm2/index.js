import { EventEmitter } from "events";

class Counter extends EventEmitter {
  constructor(maxLimit = 10, minLimit = -5) {
    super();
    this.count = 0;
    this.maxLimit = maxLimit;
    this.minLimit = minLimit;
    this.increasedCount = 0;
    this.decreasedCount = 0;
    this.resetCount = 0;
  }

  logCurrentCount() {
    if (this.count === 0) {
      this.emit("zero");
    }
  }

  increase() {
    if (this.maxLimit !== null && this.count >= this.maxLimit) {
      this.emit('maxReached', this.maxLimit);
      return; 
    }
    this.count++;
    this.increasedCount++;
    this.emit('increase', this.count);
    this.logCurrentCount();
  }

  decrease() {
    if (this.minLimit !== null && this.count <= this.minLimit) {
      this.emit('minReached', this.minLimit);
      return; 
    }
    this.count--;
    this.decreasedCount++;
    this.emit('decrease', this.count);
    this.logCurrentCount();
  }

  reset() {
    this.count = 0;
    this.resetCount++;
    this.emit("reset");
    this.logCurrentCount();
  }

  getStats() {
    const stats = {
      increased: this.increasedCount,
      decreased: this.decreasedCount,
      reset: this.resetCount,
    };
    this.emit("stats", stats);
  }
}

const counter = new Counter(5, -3); 

counter.on('increase', (num) => console.log(`Number increased to ${num}`));
counter.on('decrease', (num) => console.log(`Number decreased to ${num}`));
counter.on('zero', () => console.log('Counter is zero!'));
counter.on('maxReached', (max) => console.log(`Maximum limit of ${max} reached!`));
counter.on('minReached', (min) => console.log(`Minimum limit of ${min} reached!`));
counter.on('reset', () => console.log('Counter has been reset!'));
counter.on('stats', (stats) => 
  console.log(`Stats - Increased: ${stats.increased}, Decreased: ${stats.decreased}, Reset: ${stats.reset}`)
);

console.log("Increasing counter:");
for (let i = 0; i < 7; i++) {
  counter.increase();
}

console.log("Decreasing counter:");
for (let i = 0; i < 9; i++) {
  counter.decrease();
}

console.log("Resetting counter:");
counter.reset();

console.log("Getting counter stats:");
counter.getStats();
