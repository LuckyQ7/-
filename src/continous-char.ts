/**
 * @description 找出连续的字符
 */

interface IRes {
  char: string;
  length: number;
}

function continousChar1(str: string): IRes {
  const res: IRes = {
    char: "",
    length: 0,
  };

  const length = str.length;
  if (length == 0) return res;
  let tempLength = 0;

  for (let i = 0; i < length; i++) {
    tempLength = 0;
    for (let j = i; j < length; j++) {
      if (str[i] === str[j]) {
        tempLength++;
      }

      if (str[i] !== str[j] || j == length - 1) {
        if (tempLength > res.length) {
          res.length = tempLength;
          res.char = str[i];
        }

        if (i < length - 1) {
          i = j - 1; // 跳步
        }

        break;
      }
    }
  }

  return res;
}

console.log(continousChar1("aabbbcccdddeeeee123"));
