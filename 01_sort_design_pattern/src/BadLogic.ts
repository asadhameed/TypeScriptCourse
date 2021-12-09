export class BadLogicSorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    /*****************************************************************************
     * Type Guards
     * In typescript when we use union types, it take the common properties.
     *  We should use type guards  if we need all property of specific datatype
     *****************************************************************************/
    if (this.collection instanceof Array) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }
    if (typeof this.collection === "string") {
      const str = this.collection.split("");
      for (let i = 0; i < length; i++)
        for (let j = 0; j < length - i - 1; j++) {
          if (str[j].toUpperCase() > str[j + 1].toUpperCase()) {
            const t = str[j];
            str[j] = str[j + 1];
            str[j + 1] = t;
          }
        }

      this.collection = str.join("");
    }
  }
}
