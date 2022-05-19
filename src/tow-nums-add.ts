/**
 * @description 一个递增的数组，找出两个和为目标的数
 */

function tow_nums_add(arr: number[], target: number): number[] | [] {
  const length = arr.length;
  const result: number[] = [];
  if (length == 0) return result;
  // 使用 flag 结束外面的循环
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const k = arr[j];
      if (n + k == target) {
        result.push(i);
        result.push(j);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return result;
}

function tow_add_sum(arr: number[], target: number): number[] | [] {
  const length = arr.length;
  const result: number[] = [];
  if (length == 0) return result;

  let i = 0;
  let j = length - 1;

  while (i < j) {
    const n = arr[i];
    const k = arr[j];

    if (n + k < target) {
      i++;
    } else if (n + k > target) {
      j--;
    } else {
      result.push(i);
      result.push(j);
      break;
    }
  }

  return result;
}

// console.log(tow_nums_add([1, 2, 3, 4, 5, 6], 7));
console.log(tow_add_sum([1, 2, 3, 4, 5, 6], 7));
