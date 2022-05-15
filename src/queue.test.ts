import { Myqueue } from "./queue";

describe("队列测试", () => {
  it("正常情况", () => {
    const q = new Myqueue();
    expect(q.length).toBe(0);

    q.add(100);
    q.add(200);
    q.add(300);

    expect(q.length).toBe(3);
  });

  it("delete", () => {
    const q = new Myqueue();
    q.add(100);
    const res = q.delete();
    expect(res).toBe(100);
  });

  it("delete", () => {
    const q = new Myqueue();
    const res = q.delete();
    expect(res).toBe(null);
  });
});
