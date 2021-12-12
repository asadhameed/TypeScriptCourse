import { Model } from "../models/Model";
import { User } from "../models/User";
////  I comments the section because UserFrom also use the modal
//// So the better option is take model generic
// interface ModelForView {
//   on(eventName: string, callback: () => void): void;

// }
export abstract class View<T extends Model<K>, K> {
  region: { [key: string]: Element } = {};
  constructor(public parents: Element, public modal: T) {
    this.bindModal();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventMap(): { [key: string]: () => void } {
    return {};
  }
  bindModal = (): void => {
    this.modal.on("change", () => {
      this.render();
    });
    this.modal.on("save", () => {
      this.render();
    });
  };

  bindEvent(fragment: DocumentFragment): void {
    const eventMap = this.eventMap();

    for (let key in eventMap) {
      const [eventName, selector] = key.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventMap[key]);
      });
    }
  }
  mapRegion(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];

      const element = fragment.querySelector(selector);

      if (element) {
        this.region[key] = element;
      }
    }
  }
  onRender = () => {};
  render(): void {
    // If parent element have already this child then first remove and re render again
    this.parents.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvent(templateElement.content);
    this.mapRegion(templateElement.content);
    this.onRender();
    this.parents.append(templateElement.content);
  }
}
