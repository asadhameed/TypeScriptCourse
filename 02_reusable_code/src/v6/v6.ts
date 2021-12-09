import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "../helper/MatchResult";
import { MatchReader } from "./MatchReader";
export const v6ReadFile = (): void => {
  // Create an Object that satisfies the 'DataReader' interface inside in MatchReader
  const reader = new CsvFileReader("football.csv");
  // Creat an instance of MatchReader and pass in something satisfying the 'DataReader' interface
  const matchReader = new MatchReader(reader);

  matchReader.load();
  let unitMatchWin = 0;
  for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
      unitMatchWin++;
    } else {
      if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        unitMatchWin++;
      }
    }
  }
  console.log("-------------------------------------------->");
  console.log("🚀 ~ ~ file: v6.ts ~  Use Interface ", unitMatchWin);
};
