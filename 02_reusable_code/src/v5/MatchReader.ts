import { CsvFileReader } from "./CsvFileReader";
import { dataStringToDate } from "../helper/utils";
import { MatchResult } from "../helper/MatchResult";
type MatchData = [Date, string, string, number, number, MatchResult, string];
export class MatchReader extends CsvFileReader<MatchData> {
  rowMap(row: string[]): MatchData {
    return [
      dataStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
