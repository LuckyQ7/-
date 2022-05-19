import { binarySearch, binarySearch2 } from "./binary-search";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
describe("二分查找", () => {
  it("正常情况,非递归", () => {
    const target = 5;
    const index = binarySearch(arr, target);
    expect(index).toBe(4);
  });

  it("正常情况,递归", () => {
    const target = 5;
    const index = binarySearch2(arr, target);
    expect(index).toBe(4);
  });

  it("无目标值情况,非递归", () => {
    const target = 20;
    const index = binarySearch(arr, target);
    expect(index).toBe(-1);
  });

  it("无目标值情况,递归", () => {
    const target = 20;
    const index = binarySearch2(arr, target);
    expect(index).toBe(-1);
  });
});
