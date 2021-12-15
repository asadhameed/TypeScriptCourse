import { Router, Request, Response, NextFunction } from "express";
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send("Denied");
  }
}

const router = Router();
router.get("/login", (req: Request, res: Response): Response => {
  console.log(req.hostname);
  return res.send(`
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
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  console.log(req.ip);
  const { email, password } = req.body;
  if (email && password && email === "hi@hi.com" && password === "password") {
    req.session = { loggedIn: true };

    res.redirect("/");
  } else {
    res.send("Invalid email and password");
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
        <div> 
            <div>You are log in  </div>
            <a href='/logout'>Log out </a>
        </div>
      `);
  } else {
    res.send(`
        
    <div> 
    <div>you are not log in </div>
    <a href='/login'> Log in</a>
    </div>
      `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected  route,  logged in user!");
});

export { router };
