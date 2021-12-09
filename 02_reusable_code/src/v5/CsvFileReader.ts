import fs from "fs";
export abstract class CsvFileReader<T> {
  public data: T[] = [];
  abstract rowMap(row: string[]): T;

  constructor(public filename: string) {}

  readFileReturnTupleArray(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.rowMap);
  }
}
