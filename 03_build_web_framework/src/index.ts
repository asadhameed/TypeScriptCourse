import { User } from "./models/User";

import { UserList } from "./views/UserList";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "Afridi", age: 38 });

const root = document.getElementById("root");

// if (root) {

//   const u = new UserEdit(root, user);
//   u.render();
// } else {
//   throw new Error("Root element was not found");
// }

const collection = User.buildUserCollection();
collection.on("change", () => {
  if (root) {
    const userList = new UserList(root, collection);
    userList.render();
    //const u = new UserEdit(root, user);
    //u.render();
  } else {
    throw new Error("Root element was not found");
  }
});
collection.fetch();
