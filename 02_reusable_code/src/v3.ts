import { CsvFileReader } from "./CsvFileReader";
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
export const v3ReadFile = (): void => {
  const reader = new CsvFileReader("football.csv");
  /***************************************
   *  Return String[][]
   ****************************************/
  reader.readFileReturnStringArray();
  let unitMatchWin = 0;
  for (let match of reader.dataStringArray) {
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
    "🚀 ~ ~ file: v3.ts ~ line 22  ~  Man United Win with Array",
    unitMatchWin
  );

  /***************************************
   *  Return Match[]
   ****************************************/
  unitMatchWin = 0;
  reader.readFileReturnClassMatch();
  for (let match of reader.dataMatchArray) {
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
    "🚀 ~ file: v3.ts ~ line 51 Use the Match class Man United Win",
    unitMatchWin
  );
};
