/**
 * @description 判断括号匹配 测试
 */

import { mathBracket } from "./match-bracket";

describe("括号匹配测试", () => {
  it("正常情况", () => {
    const s = "(a{b[c]d}e)";
    const res = mathBracket(s);
    expect(res).toBe(true);
  });

  it("不匹配情况", () => {
    const s = "(a{b[c]d}e]";
    const res = mathBracket(s);
    expect(res).toBe(false);
  });

  it("顺序不对情况", () => {
    const s = "(a{b[cd}e)]";
    const res = mathBracket(s);
    expect(res).toBe(false);
  });
});
