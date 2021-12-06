import myCollection from "./collection.js";
/* Part 2: Setting up and running files with Node */
/* 👉 2b. Create a file called index.js. In this file, and create a variable myCollection as an array of objects: */

console.log(myCollection);
/* 👉 2c. Create a function called describeItem, which should take in an item as a paramete */
function describeItem(name, like) {
  console.log(`I have a ${name}. Here's what I like about it: ${like}`);
}
const firstMassage = describeItem(
  myCollection[0].name,
  myCollection[0].whatILike
);
console.log(firstMassage);
/* 👉 2d. Now make a function called describeCollection that takes in an array as a parameter. */
function describeCollection() {
  const text = myCollection.map((item) => {
    console.log(
      `I have a ${item.name}. Here's what I like about it: ${item.whatILike}`
    );
  });
}
describeCollection();
