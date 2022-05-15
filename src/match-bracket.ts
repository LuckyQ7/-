/**
 * @description 括号匹配
 */

function isMatch(top: string, k: string): boolean {
  if (top === "(" && k === ")") return true;
  else if (top === "{" && k === "}") return true;
  else if (top === "[" && k === "]") return true;
  else return false;
}

export function mathBracket(s: string): boolean {
  const length = s.length;
  if (length == 0) return true;
  const left = "({[";
  const right = ")}]";
  const stack = [];
  for (let i = 0; i < length; i++) {
    const k = s[i];
    if (left.includes(k)) {
      stack.push(k);
    } else if (right.includes(k)) {
      const top = stack[stack.length - 1];
      if (isMatch(top, k)) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

