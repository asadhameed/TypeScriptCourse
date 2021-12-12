import { Collection } from "../models/Collection";
export abstract class CollectionView<T, K> {
  //collection: T[];

  constructor(public parent: Element, public collection: Collection<T, K>) {}

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    console.log(
      "🚀 ~ file: CollectionView.ts ~ line 15 ~ CollectionView<T, ~ render ~ model",
      this.collection
    );
    for (let model of this.collection.models) {
      console.log();
      const itemParent = document.createElement("div");
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }
    this.parent.append(templateElement.content);
  }
  abstract renderItem(model: T, itemParent: Element): void;
}
