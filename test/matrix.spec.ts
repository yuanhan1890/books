import { Matrix } from "../src/matrix";

test("matrix:toString", () => {
  const m = Matrix.fromString(`
  1,2,3
  4,5,6,
  7,8,9
  `, 3, 3);

  const str = m.toString().split("\n").map((line) => line.trim());
  expect(str[0]).toBe("1, 2, 3");

  const m0 = Matrix.fromString(`
  1,2,999,
  4,5,6,
  7,8,9
  `, 3, 3);

  const str0 = m0.toString().split("\n").map((line) => line.trim());
  expect(str0[0]).toBe("1,   2, 999");
  expect(str0[1]).toBe("4,   5,   6");
});
