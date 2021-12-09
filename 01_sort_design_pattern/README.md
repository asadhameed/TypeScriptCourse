# Design Patterns with Typescript

This exercise helps to understand the concept of typescript.

1. Make tsconfig.json with basic properties 1) compilerOptions
2. compilerOptions have the following basic properties
   1. rootDir
   2. outDir
   3. target
   4. module
3. Inside package.json file scripts
4. If config with dev. npm run dev
5. If config with start. npm start
6. Union type " | ": Take the common property from data type (BadLogic.ts)
   1. const value : string | number[] this will take common property of string and array
   2. If we need to take all the property of string or number array then we should use type guards
   3. there are two type of type guards typeof and instanceof (BadLogic.ts)
   4. typeof is used for primitive data type
   5. instanceof class, object or array
7. How we can use Interface (not_abstract/Sorter.ts)
8. How can use abstract class (abstract/SorterAbstract.ts)

## Available Scripts

### `npm install --global typescript`

Installing the TypeScript Package and tsc --version will show the version of tsc.

### `npm init -y`

It will generate a config json file.

### `npm install --save-dev nodemon`

It will install nodemon which is help to fast the development process.

### `npm install concurrently --save-dev`

Run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.

More help [Concurrently](https://www.npmjs.com/package/concurrently)

### `npx parcel index.html`

Runs the app in the development mode.<br />
