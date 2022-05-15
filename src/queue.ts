/**
 * @description 两个栈实现一个队列
 */

export class Myqueue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  add(n: number) {
    this.stack1.push(n);
  }

  delete(): number | null {
    while (this.stack1.length) {
      const n = this.stack1.pop();
      if (n) this.stack2.push(n);
    }
    const res = this.stack2.pop() || null;

    while (this.stack2.length) {
      const n = this.stack2.pop();
      if (n) this.stack1.push(n);
    }
    return res;
  }

  get length() {
    return this.stack1.length;
  }
}

//功能测试

const q = new Myqueue();

q.add(100);
q.add(200);
q.add(300);
console.log(q.length);
console.log(q.delete());
console.log(q.length);
console.log(q.delete());
