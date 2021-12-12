import { User, UserProps } from "../models/User";
import { View } from "./View";
export class UserForm extends View<User, UserProps> {
  eventMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.update-name": this.onUpdateNameClick,
      "click:.save-user": this.onSaveUser,
    };
  }

  onUpdateNameClick = (): void => {
    const input = document.querySelector("input");
    if (input) {
      const name = input.value.trim();
      if (name !== "") {
        this.modal.set({ name });
      }
    }
  };
  onSetAgeClick = (): void => {
    this.modal.setRandomAge();
  };

  onSaveUser = (): void => {
    this.modal.save();
  };

  // onSetAgeClick = () => {
  //   // console.log("Hello Button Click ");
  //   const age = Math.floor(Math.random() * 100);

  //   this.user.set({ age });
  //   this.render();
  // };

  template(): string {
    return `
            <div> 
               
                <input />
                <button class='update-name'>Update </button>
                <div> 
                <button class='set-age'>Add a random age </button>
                <button class='save-user'>Save </button>
                </div>
            </div>
        `;
  }
}
