/**
 * @description 把数组中的0移动到末尾
 */

function moveZero(arr: number[]) {
  const length = arr.length;
  if (length == 0) return arr;
  let zeroLength = 0;
  for (let i = 0; i < length - zeroLength; i++) {
    if (arr[i] == 0) {
      arr.push(0);
      arr.splice(i, 1);
      i--;
      zeroLength++;
    }
  }
  return arr;
}

/**
 * @description 把数组中的0移动到末尾（循环一次）
 */

function moveZero1(arr: number[]) {
  const length = arr.length;
  if (length == 0) return arr;
  let i;
  let j = -1;

  for (i = 0; i < length; i++) {
    if (arr[i] == 0 && j < 0) {
      j = i; // 找到第一个0
    }

    if (arr[i] !== 0 && j > 0) {
      const n = arr[i];
      arr[i] = arr[j];
      arr[j] = n;
      j++;
    }
  }
  return arr;
}

console.log(moveZero1([1, 0, 2, 3, 0, 1, 0, 2, 0, 5]));
