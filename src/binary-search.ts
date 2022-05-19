/**
 * @description 二分查找法（循环）
 */

export function binarySearch(arr: number[], target: number): number {
  const length = arr.length;
  if (length == 0) return -1;
  if (typeof target !== "number") return -1;
  let startIndex = 0;
  let endIndex = length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (arr[middleIndex] > target) {
      endIndex = middleIndex - 1;
    } else if (arr[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}

export function binarySearch2(
  arr: number[],
  target: number,
  startIndex?: number,
  endIndex?: number
): number {
  const length = arr.length;
  if (length === 0) return -1;
  if (typeof target !== "number") return -1;

  if (startIndex == null) startIndex = 0;
  if (endIndex == null) endIndex = length - 1;
  let middleIndex = Math.floor((startIndex + endIndex) / 2);

  if (startIndex > endIndex) return -1;

  const value = arr[middleIndex];
  if (value > target) {
    return binarySearch2(arr, target, startIndex, middleIndex - 1);
  } else if (value < target) {
    return binarySearch2(arr, target, middleIndex + 1, endIndex);
  } else {
    return middleIndex;
  }
}

// const arr = [];
// for (let i = 0; i < 1000; i++) {
//   arr.push(i);
// }
// const target = 8866;
// console.time("aa");
// console.log(binarySearch2(arr, target));
// console.timeEnd("aa");

// console.time("bb");
// console.log(binarySearch(arr, target));
// console.timeEnd("bb");
