import { User, UserProps } from "../models/User";
import { View } from "./View";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form",
    };
  }
  onRender = (): void => {
    new UserShow(this.region.userShow, this.modal).render();
    new UserForm(this.region.userForm, this.modal).render();
  };
  template(): string {
    return `
         <div>
         <div class="user-show"> </div>
         <div class="user-form"> </div>
         </div>
        `;
  }
}
