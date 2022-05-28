/**
 * @description 求1～10000之间的回文字符串
 */

function findPalindromeNumber(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    const str1 = i.toString();
    const str2 = str1.split("").reverse().join("");
    if (str1 === str2) {
      res.push(Number(str1));
    }
  }

  return res;
}

/**
 * @description 求1～10000之间的回文字符串 头尾比较
 */

function findPalindromeNumber2(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    const n = i.toString();
    let startIndex = 0;
    let endIndex = n.length - 1;
    let flag = true;
    while (startIndex < endIndex) {
      if (n[startIndex] !== n[endIndex]) {
        flag = false;
        break;
      }

      startIndex++;
      endIndex--;
    }

    if (flag) {
      res.push(Number(n));
    }
  }

  return res;
}

/**
 * @description 求1～10000之间的回文字符串 头尾比较
 */

function findPalindromeNumber3(max: number): number[] {
  const res: number[] = [];
  if (max <= 0) return res;

  for (let i = 1; i <= max; i++) {
    let n = i;
    let rev = 0; // 存储翻转数

    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }

    if (i === rev) res.push(i);
  }

  return res;
}

console.log(findPalindromeNumber3(10000));
