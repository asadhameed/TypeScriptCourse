import { MatchReader } from "./MatchReader";
import { MatchResult } from "../helper/MatchResult";
export const v5ReadFile = (): void => {
  const reader = new MatchReader("football.csv");

  reader.readFileReturnTupleArray();
  let unitMatchWin = 0;
  for (let match of reader.data) {
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
    "🚀 ~ ~ file: v5.ts Man United Win with abstract and Generics",
    unitMatchWin
  );
};
