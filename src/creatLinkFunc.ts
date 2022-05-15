/**
 * @description 把数组转换成链表的函数
 */

interface listNode {
  value: number;
  next?: listNode;
}

function createLinks(arr: number[]): listNode {
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
