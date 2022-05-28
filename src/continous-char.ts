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

function continousChar2(str: string): IRes {
  const res: IRes = {
    char: "",
    length: 0,
  };

  const length = str.length;
  if (length == 0) return res;

  let i = 0;
  let j = 0;
  let tempLength = 0;
  for (; i < length; i++) {
    if (str[i] == str[j]) {
      tempLength++;
    }

    if (str[i] !== str[j] || i === length - 1) {
      // 一旦不相等或者到了末尾
      if (tempLength > res.length) {
        res.length = tempLength;
        res.char = str[j];
      }

      tempLength = 0;

      if (i < length - 1) {
        // 不相等但是还没到末尾
        j = i;
        i--; // 让下次++的时候回正一下
      }
    }
  }
  return res;
}
// console.log(continousChar1("aabbbcccdddeeeee123"));
