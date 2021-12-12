const colors = {
  color: "red",
  printColor(): void {
    console.log(this.color);
  },
};

colors.printColor();
/**************************************************************
 * This will refer to colors object because on left side there is colors object
 * just imagine console.log(colors.color)
 *
 **************************************************************/

// if we destruct the function
const printColor = colors.printColor;

/**************************************************************
 * The following code will give an error because on the left side there is no object
 * this is like undefine
 * just imagine console.log(undefine.color)
 * you can solve this issue with arrow function
 **************************************************************/

printColor();
