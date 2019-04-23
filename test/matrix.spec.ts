import { Matrix } from "../src/matrix";

function getMatrix() {
  return Matrix.fromString(`
  1,2,3
  4,5,6,
  7,8,9
  `, 3, 3);
}

test("matrix:toString", () => {
  const m = getMatrix();

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

test("matrix:basic method", () => {
  const m = getMatrix();
  expect(m.getRow(0)).toEqual([1, 2, 3]);
  expect(m.getCol(0)).toEqual([1, 4, 7]);

  m.swapRows(0, 2);
  expect(m.getRow(0)).toEqual([7, 8, 9]);
  expect(m.getCol(0)).toEqual([7, 4, 1]);

  m.multiRow(0, 100);
  expect(m.getRow(0)).toEqual([700, 800, 900]);
  m.multiThenAdd(1, -1, 2);
  expect(m.getRow(2)).toEqual([-3, -3, -3]);
});

test("matrix:ref", () => {
  const m = getMatrix();

  m.ref();
  console.log(m);
});
