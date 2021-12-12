import { AxiosPromise, AxiosResponse } from "axios";
interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}
interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}
interface HasId {
  id?: number;
}
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
  // get get() {
  //   return this.attributes.get;
  // }
  get = this.attributes.get;
  // get on() {
  //   return this.events.on;
  // }
  on = this.events.on;
  // get trigger() {
  //   return this.events.trigger;
  // }
  trigger = this.events.trigger;
  set(update: T): void {
    this.attributes.set(update);
    this.trigger("change");
  }

  fetch = () => {
    const id = this.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch  without an id");
    }
    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  };
  save(): void {
    //  const user: UserProps = this.attributes.getAll();
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger("save");
      })
      .catch((err) => this.trigger("error"));
  }
}
