/**
 * @description 用链表创建一个队列
 */

interface listNode {
  value: number;
  next: listNode | null;
}

export class listNodeCreateQueue {
  private len = 0;
  // 初始化头
  private head: listNode | null = null;
  // 初始化尾部
  private tail: listNode | null = null;
  // 入队
  add(n: number) {
    // 从尾部入队，所以next永远是null
    const newListNode: listNode = {
      value: n,
      next: null,
    };

    if (this.head === null) {
      // 将head 指向 newListNode
      this.head = newListNode;
    }

    // 更新尾部节点
    if (this.tail) {
      // 这里的tail指向的还是上次的newListNode
      this.tail.next = newListNode;
    }

    // 重新指向尾部节点
    this.tail = newListNode;

    this.len++;
  }

  // 出队
  delete(): number | null {
    const headNode = this.head;
    const value = headNode?.value;
    if (!value) return null;
    if (this.len <= 0) return null;

    this.head = this.head!.next;
    this.len--;
    return value;
  }

  // 长度
  get length(): number {
    return this.len;
  }
}

const queue = new listNodeCreateQueue();

queue.add(100);
queue.add(200);
queue.add(300);

console.log(queue.delete());
console.log("length1", queue.length);
console.log(queue.delete());
console.log("length2", queue.length);
console.log(queue.delete());
console.log("length3", queue.length);
console.log(queue.delete());
console.log("length4", queue.length);
