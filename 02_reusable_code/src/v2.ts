import fs from "fs";
class Match {
  constructor(
    public firsTeam: string,
    public secondTeam: string,
    public matchResult: string
  ) {}
}

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
export const v2ReadFile = (): void => {
  try {
    const matches = fs
      .readFileSync("football.csv", { encoding: "utf-8" })
      .split("\n")
      .map((row: string): Match => {
        const ma = row.split(",");
        return new Match(ma[1], ma[2], ma[5]);
      });

    let unitMatchWin = 0;

    for (let match of matches) {
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
      "🚀 ~ file: v2.ts ~ line 43 Use the Match class Man United Win",
      unitMatchWin
    );
  } catch (error) {
    console.log("🚀 ~ file: v2.ts ~ line 45 ~ v1ReadFile ~ error", error);
  }
};
