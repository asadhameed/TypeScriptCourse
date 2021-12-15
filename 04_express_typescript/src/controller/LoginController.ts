import { Request, Response } from "express";
// import { get } from "./decorator/route";
// import { controller } from "./decorator/controller";
import { get, post, controller, bodyValidator } from "./decorator/index";

@controller("/auth")
export class LoginController {
  /*******************************************************
   * If we call http://localhost:3000/auth/ then it will hang because the following
   * function is not return any response.
   * So To get error on development time we should change the decorator/route.ts and write own interface RouterHandlerDescriptor
   * If you remove RouterHandlerDescriptor from  decorator/route.ts then following code will not show an error on development
   *****************************************************/

  // @get("/")
  // add(a: number, b: number): number {
  //   return a + b;
  // }

  @get("/login")
  getLogIn(req: Request, res: Response): void {
    res.send(`
          <form method="post">   
               <div>
                  <label> User Name</label>
                   <input name="email" />
               </div>
               <div>
                  <label> Password</label>
                   <input name="password" type="password" />
               </div>
               <button> Submit </button>
          </form>
          `);
  }
  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email === "hi@hi.com" && password === "password") {
      req.session = { loggedIn: true };

      res.redirect("/");
    } else {
      res.send("Invalid email and password");
    }
  }
  @get("/logout")
  getLogOut(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect("/");
  }
}
