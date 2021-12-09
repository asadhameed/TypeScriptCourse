import { OutputTarget } from "./Summary";
export class ConsoleReport implements OutputTarget {
  print(report: string) {
    console.log("--------------------------->");
    console.log(report);
  }
}
