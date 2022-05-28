/**
 * @description 数字千分位格式化
 */

function format1(n: number): string {
  n = Math.floor(n);
  const s = n.toString();
  const arr = s.split("").reverse();

  return arr.reduce((prev, current, index) => {
    console.log(prev);

    if (index % 3 == 0) {
      if (prev) {
        return current + "," + prev;
      } else {
        return current;
      }
    } else {
      return current + prev;
    }
  }, "");
}

function format2(n: number): string {
  n = Math.floor(n);

  const s = n.toString();
  const length = s.length;
  let res = "";

  for (let i = length - 1; i >= 0; i--) {
    let j = length - i;
    if (j % 3 == 0) {
      if (i !== 0) {
        res = "," + s[i] + res;
      } else {
        res = s[i] + res; 
      }
    } else {
      res = s[i] + res;
    }
  }

  return res;
}

console.log(format2(300));
