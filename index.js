import chalk from "chalk";
import myCollection from "./collection.js";
/* Part 2: Setting up and running files with Node */
/* 👉 2b. Create a file called index.js. In this file, and create a variable myCollection as an array of objects: */
console.log(chalk.red("hello"));
console.log(myCollection);
/* 👉 2c. Create a function called describeItem, which should take in an item as a paramete */
function describeItem(name, like, count) {
  console.log(
    `${chalk.yellow(count)}: I have a ${chalk.cyan(
      name
    )}. Here's what I like about it: ${chalk.green(like)}`
  );
}
const firstMassage = describeItem(
  myCollection[0].name,
  myCollection[0].whatILike,
  myCollection[0].count
);
console.log(firstMassage);
/* 👉 2d. Now make a function called describeCollection that takes in an array as a parameter. */
function describeCollection() {
  const text = myCollection.map((item) => {
    console.log(
      `${chalk.yellow(item.count)}: I have a ${chalk.cyan(
        item.name
      )}. Here's what I like about it: ${chalk.green(item.whatILike)}`
    );
  });
}
describeCollection();
