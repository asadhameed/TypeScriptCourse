import { MatchData } from "../helper/MatchData";
import { MatchResult } from "../helper/MatchResult";
import { Analyzer } from "./Summary";
export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let matchWin = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        matchWin++;
      } else {
        if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
          matchWin++;
        }
      }
    }

    return `${this.team} wins ${matchWin} ${matchWin > 1 ? "games" : "game"}`;
  }
}
