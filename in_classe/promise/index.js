// function delay(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }
// delay(3000).then(() => console.log("1"));



// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// wait(0).then(() => console.log(4));
// Promise.resolve()
//   .then(() => console.log(2))
//   .then(() => console.log(3));
// console.log(1);


const promise = new Promise((resolve, reject) => {
  console.log("Promise callback");
  resolve();
}).then((result) => {
  console.log("Promise callback (.then)");
});

setTimeout(() => {
  console.log("event-loop cycle: Promise (fulfilled)", promise);
}, 0);

console.log("Promise (pending)", promise);