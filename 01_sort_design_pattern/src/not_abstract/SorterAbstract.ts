import { NumbersCollection } from "./NumbersCollection";
import { StringCollection } from "./StringCollections";

export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class AbstSorter {
  //   constructor(public collection: NumbersCollection| StringCollection) {}
  //   constructor(public collection: Sortable) {}
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    // const { length } = this.collection;
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if (this.collection.compare(j, j + 1)) {
        if (this.compare(j, j + 1)) {
          //  this.collection.swap(j, j + 1);
          this.swap(j, j + 1);
        }
      }
    }
  }
}
