import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "./decorator";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send("Denied");
  }
}
@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`
                <div> 
                    <div>You are log in  </div>
                    <a href='/auth/logout'>Log out </a>
                </div>
              `);
    } else {
      res.send(`
                
            <div> 
            <div>you are not log in </div>
            <a href='/auth/login'> Log in</a>
            </div>
              `);
    }
  }
  @use(requireAuth)
  @get("/protected")
  getProtectedPage(req: Request, res: Response): void {
    res.send("Welcome to protected  route,  logged in user!");
  }
}
