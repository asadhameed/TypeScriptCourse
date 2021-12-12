import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";

export class Collection<T, K> {
  models: T[] = [];
  private events: Eventing = new Eventing();
  constructor(private rootUrl: string, private deserialize: (json: K) => T) {}
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.on;
  }
  fetch() {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        // const user = K.buildUser(value);
        this.models.push(this.deserialize(value));
        this.events.trigger("change");
      });
    });
  }
}
