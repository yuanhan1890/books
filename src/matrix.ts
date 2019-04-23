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

  public toString() {
    const data: string[] = this.data.map((num) => `${num}`);
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
