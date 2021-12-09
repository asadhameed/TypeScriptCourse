import { dataStringToDate } from "../helper/utils";
import { MatchResult } from "../helper/MatchResult";
import { MatchData } from "../helper/MatchData";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}
  static readDataFromCsvFile(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
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
}
