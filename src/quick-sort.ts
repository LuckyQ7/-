/**
 * @description 快速排序 二分查找+递归
 */

function quickSort(arr: number[]): number[] {
  const length = arr.length;
  if (length == 0) return arr;

  let right = []; // 存放比中间值大的值
  let left = []; // 存放比中间值小的值

  const middleValue = arr.splice(Math.floor(length / 2), 1)[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > middleValue) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat([middleValue], quickSort(right));
}

function quickSort2(arr: number[]): number[] {
  const length = arr.length;
  if (length == 0) return arr;

  let right = []; // 存放比中间值大的值
  let left = []; // 存放比中间值小的值

  const middleValue = arr.slice(
    Math.floor(length / 2),
    Math.floor(length / 2) + 1
  )[0];

  for (let i = 0; i < length; i++) {
    if (i !== Math.floor(length / 2)) {
      if (arr[i] < middleValue) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return quickSort2(left).concat([middleValue], quickSort2(right));
}

console.log(quickSort2([2, 2, 3]));
