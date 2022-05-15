interface listNode {
  value: number;
  next?: listNode;
}

/**
 * @description 把数组转换成链表的函数
 */

export function createLinks(arr: number[]): listNode {
  const length = arr.length;
  if (!length) throw new Error("arr length is must be > 0");

  // 最后一个节点
  let curNode: listNode = {
    value: arr[length - 1],
  };

  if (length === 1) return curNode;

  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode,
    };
  }

  return curNode;
}

/**
 * @description  反转单向链表
 */

export function reverseListNode(listNode: listNode): listNode {
  // 创建三个指针
  let currentNode: listNode | undefined = undefined;
  let previewNode: listNode | undefined = undefined;
  let nextNode: listNode | undefined = listNode;
  while (nextNode) {
    // 删除第一个节点的next 防止死循环
    if (currentNode && !previewNode) {
      delete currentNode.next;
    }
    // 反转节点
    if (currentNode && previewNode) {
      currentNode.next = previewNode;
    }

    // 将三个指针向后瞬移
    previewNode = currentNode;
    currentNode = nextNode;
    nextNode = nextNode.next;
  }

  // 处理 最后一个没有next的节点
  currentNode!.next = previewNode;
  return currentNode!;
}
