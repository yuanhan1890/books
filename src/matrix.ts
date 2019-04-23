export class Matrix {
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
    const data: string[] = this.data.map((num) => `${num % 1 === 0 ? num : num.toFixed(2)}`);
    const maxLen = Math.max(...data.map((s) => s.length)) + 2;
    const placeholder = Array.from({ length: maxLen }).join(" ");

    const strs: string[] = [];
    let str: string;
    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.columns; j += 1) {
        if (j === 0) {
          strs.push(data[i * this.columns] + ",");
        } else {
          str = placeholder + data[i * this.columns + j] + ((j === this.columns - 1) ? " " : ",");
          strs.push(str.slice(str.length - maxLen, str.length));
        }
      }
      strs.push("\n");
    }

    return strs.join("");
  }
}
