export class StringCollection {
  constructor(public data: string) {}
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toUpperCase() > this.data[rightIndex].toUpperCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const str = this.data.split("");
    const temp = str[leftIndex];
    str[leftIndex] = str[rightIndex];
    str[rightIndex] = temp;
    this.data = str.join("");
  }
}
