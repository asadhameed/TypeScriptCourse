import fs from "fs";
import { dataStringToDate } from "../helper/utils";
import { MatchResult } from "../helper/MatchResult";
export interface Match {
  date: Date;
  firsTeam: string;
  secondTeam: string;
  firstTeamGoal: number;
  secondTeamGoal: number;
  matchResult: MatchResult;
}
type MatchData = [Date, string, string, number, number, MatchResult, string]; // this is tuple in typescript
export class CsvFileReader {
  public dataTuple: MatchData[] = [];
  public dataInterface: Match[] = [];
  constructor(public filename: string) {}

  readFileReturnTupleArray(): void {
    this.dataTuple = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map((row: string[]): MatchData => {
        return [
          dataStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
  readFileReturnInterface(): void {
    this.dataInterface = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(
        (row: string[]): Match => ({
          date: dataStringToDate(row[0]),
          firsTeam: row[1],
          secondTeam: row[2],
          firstTeamGoal: parseInt(row[3]),
          secondTeamGoal: parseInt(row[4]),
          matchResult: row[5] as MatchResult,
        })
      );
  }
}
