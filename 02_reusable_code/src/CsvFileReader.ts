import fs from "fs";
export class Match {
  constructor(
    public firsTeam: string,
    public secondTeam: string,
    public matchResult: string
  ) {}
}

export class CsvFileReader {
  public dataStringArray: string[][] = [];
  public dataMatchArray: Match[] = [];
  constructor(public filename: string) {}

  readFileReturnStringArray(): void {
    this.dataStringArray = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
  readFileReturnClassMatch(): void {
    this.dataMatchArray = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): Match => {
        const match = row.split(",");
        return new Match(match[1], match[2], match[5]);
      });
  }
}
