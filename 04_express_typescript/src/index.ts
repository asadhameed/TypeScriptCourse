/*********************************************
 Decorator and MetaData
 ********************************************/

// import { Boat } from "./exampleDecorator/Boat";
// import { metaDataFun, makePlane } from "./exampleDecorator/metaData";

// //metaDataFun();
// makePlane();
// //new Boat().pilot();

/************************************
 *  Express router with out Controller
 *  Express with Controller
 ****************************/
import express from "express";
import cookieSession from "cookie-session";

import { router } from "./routers/loginRouters";
import { AppRouter } from "./AppRouter";

import "./controller/RootController";
import "./controller/LoginController"; // if we donn't import this line then the route will not available
//import { LoginController } from "./controller/LoginController"; // I wrote this line to make available the controller
//new LoginController()

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cookieSession({ keys: ["hellos"] }));
//app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("the server is running");
});
