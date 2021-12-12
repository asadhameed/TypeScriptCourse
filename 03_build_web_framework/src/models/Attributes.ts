// import { UserProps } from "./User";
export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    // this.data = update;

    Object.assign(this.data, update);
  }
  getAll(): T {
    return this.data;
  }
}

// const att = new Attributes<UserProps>({name:"asad", id:10});
// // Special Node if we remove the advance generic constrains then the id in typescript will be UserProps.
// // one Way keep use type guards
// // second way keep const id = att.get('id') as number but in future if we want name here then give error
// // third keep advance generic constrains .. get<K extends keyof T>
// const id = att.get('id')
// console.log("🚀 ~ file: Attributes.ts ~ line 19 ~ id", id)
