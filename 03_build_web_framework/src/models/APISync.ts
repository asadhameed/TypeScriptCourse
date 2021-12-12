import axios, { AxiosPromise } from "axios";
interface HasId {
  id?: number;
}
export class APISync<T extends HasId> {
  constructor(public rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    if (id) {
      return axios.get(`${this.rootUrl}/${id}`);
    }
  }
  save(data: T): AxiosPromise {
    const id = data.id;
    //const { age, name } = data;
    if (!id) {
      return axios.post(this.rootUrl, data);
    } else {
      return axios.put(`${this.rootUrl}/${id}`, data);
    }
  }
}
