# Project Express with Typescript

This Project helps to understand the concept of typescript with express

1. Express running with @types give lot of issue same like req.body(loginRouters.ts)
   1. The better option is define own interface and extends from Request express interface
   2. Then you can use type guards
2. Decorators:
   1. How can make decorators (decorator/Boat.ts)
   2. Make a decorator and put logError before the class function. If the method get an error then the decorator will console log that error.
   3. Decorator around properties. 1. can't read property value. 2. Read only key
   4. Parameter decorator
   5. Class decorator
3. Decorators with Express (Controller folder)
   1. If we import router from /controller/router.ts to index.ts file so we should import the LoginController also (LoginController.ts). Without this import, we will get the error Cannot GET /auth/login
   2. Make index file in decorator folder so import all the other file function or class and export.
   3. If a make an function in controller and that don't return the request handler then you can't get
      an error on development time but you will get an error when send request for that route.
      To solve the issue then we should make own interface in decorator/route.ts (LoginController.ts and decorator/route.ts)

## Available Scripts

### `npm init -y`

It will generate a package json file.

### `tsc --init `

### `npm install concurrently nodemon --save-dev`

### `npm install express cookie-session`

### `npm install @types/express @types/cookie-session --save-dev`

### `npm install reflect-metadata --save-dev`

## Running app Scripts

### `npm run dev`
