/**
 * @description 斐波那契数列（递归）
 */

function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n == 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
// 时间复杂度O(2^n)
// console.log(fibonacci(100));

/**
 * @description 斐波那契数列（循环）
 */

function fibonacci2(n: number) {
  if (n <= 0) return 0;
  if (n == 1) return 1;

  let n1 = 1; //  记录 n - 1
  let n2 = 0; //  记录 n - 2
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = n1 + n2;
    // 整体往后移
    n2 = n1;
    n1 = result;
  }

  return result;
}

console.log(fibonacci2(9));
