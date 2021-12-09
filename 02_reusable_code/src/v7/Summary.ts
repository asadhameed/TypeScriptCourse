import { MatchData } from "../helper/MatchData";
import { HtmlReport } from "./HtmlReport";
import { WinsAnalysis } from "./WinsAnalysis";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  static printHtmlReport(name: string): Summary {
    return new Summary(new WinsAnalysis(name), new HtmlReport());
  }

  buildAndPrintReport(data: MatchData[]): void {
    const summary = this.analyzer.run(data);
    this.outputTarget.print(summary);
    this.outputTarget.print(this.analyzer.run(data));
  }
}
