import { Eventing } from "./Eventing";
import { APISync } from "./APISync";

import { Attributes } from "./Attributes";
import { AxiosResponse } from "axios";
import { Model } from "./Model";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl: string = "http://localhost:3000/users";
export class User extends Model<UserProps> {
  // private event: Eventing = new Eventing();
  // private sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  // private attributes: Attributes<UserProps>;
  // constructor(attrs: UserProps) {
  //   super(
  //     new Attributes<UserProps>(attrs),
  //     new Eventing(),
  //     new Sync<UserProps>(rootUrl)
  //   );
  // }
  static buildUser(attrs: UserProps) {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new APISync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection() {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }
  setRandomAge(): void {
    const age = Math.floor(Math.random() * 100);
    this.set({ age });
  }
}
