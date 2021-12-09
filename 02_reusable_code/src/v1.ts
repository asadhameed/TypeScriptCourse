import fs from "fs";

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}
export const v1ReadFile = (): void => {
  try {
    const matches = fs
      .readFileSync("football.csv", { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });

    let unitMatchWin = 0;

    for (let match of matches) {
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
      "🚀 ~ ~ file: v1.ts ~ line 30  ~  Man United Win",
      unitMatchWin
    );
  } catch (error) {
    console.log("🚀 ~ file: v1.ts ~ line 34 ~ ReadFile ~ error", error);
  }
};
