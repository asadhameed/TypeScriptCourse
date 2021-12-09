// import { CsvFileReader } from "./CsvFileReader";
// import { MatchReader } from "./MatchReader";
// import { WinsAnalysis } from "./WinsAnalysis";
// import { ConsoleReport } from "./ConsoleReport";
// import { HtmlReport } from "./HtmlReport";
// import { Summary } from "./Summary";
// export const v7ReadFile = (): void => {
//   const reader = new CsvFileReader("football.csv");

//   const matchReader = new MatchReader(reader);

//   matchReader.load();

//   // I wrote before watch video
//   // const winAnalysis = new WinsAnalysis("Leicester");
//   // const print = new ConsoleReport();
//   // const summary = new Summary(winAnalysis, print);
//   // summary.buildAndPrintReport(matchReader.matches);

//   const summary = new Summary(
//     new WinsAnalysis("Man United"),
//     new ConsoleReport()
//   );
//   summary.buildAndPrintReport(matchReader.matches);

//   const summaryHtml = new Summary(
//     new WinsAnalysis("Man United"),
//     new HtmlReport()
//   );
//   summaryHtml.buildAndPrintReport(matchReader.matches);
// };

/*********************************************************************
 * Define the static and the code become more structure
 *
 *
 *******************************************************************/

import { MatchReader } from "./MatchReader";

import { Summary } from "./Summary";
export const v7ReadFile = (): void => {
  const matchReader = MatchReader.readDataFromCsvFile("football.csv");
  const summaryHtml = Summary.printHtmlReport("Man United");

  matchReader.load();
  summaryHtml.buildAndPrintReport(matchReader.matches);
};
