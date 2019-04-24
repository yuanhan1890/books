export class Matrix {

  public static PRECISION = 0.00000001;
  public static fromString(str: string, rows: number, columns: number): Matrix {
    const nums: number[] = str.split(/,|\s/g).map((i) => i.trim()).filter((i) => !!i).map((i) => parseFloat(i));

    return new Matrix(nums, rows, columns);
  }

  constructor(
    public data: number[],
    public rows: number,
    public columns: number,
  ) {
  }

  public ref() {
    // echelon form
    let pivotRow = 0;
    let col;
    for (let c = 0; c < this.columns && pivotRow < this.rows; c += 1) {
      col = this.getCol(c).map((i) => Math.abs(i));

      let max = -Infinity;
      let rowContainsMax = -1;

      for (let i = pivotRow, len = col.length; i < len; i += 1) {
        if (col[i] > max) {
          max = col[i];
          rowContainsMax = i;
        }
      }

      if (max === 0) {
        continue;
      }

      if (rowContainsMax !== pivotRow) {
        this.swapRows(rowContainsMax, pivotRow);
      }

      this.multiRow(pivotRow, 1 / this.data[pivotRow * this.columns + c]);
      col = this.getCol(c);
      for (let i = pivotRow + 1; i < this.rows; i += 1) {
        if (col[i] === 0) {
          continue;
        }
        this.multiThenAdd(pivotRow, - col[i] / col[pivotRow], i);
      }

      pivotRow += 1;
    }

    pivotRow = this.rows - 1;
    let row = this.getRow(pivotRow);
    while (row.every((i) => i === 0)) {
      pivotRow -= 1;
      row = this.getRow(pivotRow);
    }

    // backward substitution
    for (let i = pivotRow; i >= 0; i -= 1) {
      row = this.getRow(i);
      let pivotCol = 0;
      while (pivotCol < this.columns) {
        if (this.data[i * this.columns + pivotCol] !== 0) {
          break;
        }
        pivotCol += 1;
      }
      if (pivotCol === -1) {
        continue;
      }

      col = this.getCol(pivotCol);
      for (let r = i - 1; r >= 0; r -= 1) {
        this.multiThenAdd(i, - col[r] / col[i], r);
      }
    }

  }

  public getData() {
    const result = [];
    let num;
    let remain;
    for (let i = 0, len = this.data.length; i < len; i += 1) {
      num = this.data[i];
      remain = num % 1;
      if (Math.abs(remain) < 0.00000001) {
        result.push(num - remain);
      } else {
        result.push(num);
      }
    }

    return result;
  }

  public swapRows(i: number, j: number) {
    let temp: number;
    const baseI: number = this.columns * i;
    const baseJ: number = this.columns * j;
    for (let c = 0; c < this.columns; c += 1) {
      temp = this.data[baseI + c];
      this.data[baseI + c] = this.data[baseJ + c];
      this.data[baseJ + c] = temp;
    }
  }

  public getRow(i: number) {
    return this.data.slice(i * this.columns, (i + 1) * this.columns);
  }

  public getCol(i: number) {
    const data: number[] = [];
    for (let r = 0; r < this.rows; r += 1) {
      data.push(this.data[r * this.columns + i]);
    }
    return data;
  }

  public multiRow(i: number, a: number) {
    const base = i * this.columns;
    for (let c = 0; c < this.columns; c += 1) {
      this.data[base + c] *= a;
    }
  }

  public multiThenAdd(i: number, a: number, j: number) {
    const baseI = i * this.columns;
    const baseJ = j * this.columns;
    for (let c = 0; c < this.columns; c += 1) {
      this.data[baseJ + c] += (this.data[baseI + c] * a);
    }
  }

  public toString() {
    const data: string[] = this.getData().map((num) => `${num % 1 === 0 ? num : num.toFixed(2)}`);
    const maxLen = Math.max(...data.map((s) => s.length)) + 2;
    const placeholder = Array.from({ length: maxLen }).join(" ");

    const strs: string[] = [];
    let str: string;
    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.columns; j += 1) {
        str = placeholder + data[i * this.columns + j];
        strs.push(str.slice(str.length - maxLen, str.length));
      }
      strs.push("\n");
    }

    return strs.join("");
  }
}
