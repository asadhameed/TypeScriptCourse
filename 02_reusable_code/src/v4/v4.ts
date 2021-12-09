import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "../helper/MatchResult";
export const v4ReadFile = (): void => {
  const reader = new CsvFileReader("football.csv");
  /***************************************
   *  Return String[][]
   ****************************************/
  reader.readFileReturnTupleArray();
  let unitMatchWin = 0;
  for (let match of reader.dataTuple) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
      unitMatchWin++;
    } else {
      if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        unitMatchWin++;
      }
    }
  }
  console.log("-------------------------------------------->");
  console.log(
    "🚀 ~ ~ file: v4.ts ~ line 22  ~  Man United Win with Tuple",
    unitMatchWin
  );

  /***************************************
   *  Return Match[]
   ****************************************/
  unitMatchWin = 0;
  reader.readFileReturnInterface();
  for (let match of reader.dataInterface) {
    if (
      match.firsTeam === "Man United" &&
      match.matchResult === MatchResult.HomeWin
    ) {
      unitMatchWin++;
    } else {
      if (
        match.secondTeam === "Man United" &&
        match.matchResult === MatchResult.AwayWin
      ) {
        unitMatchWin++;
      }
    }
  }
  console.log("-------------------------------------------->");
  console.log(
    "🚀 ~ file: v4.ts ~ line 47 Man United Win with interface",
    unitMatchWin
  );
};
