// // let p1 = new Promise((resolve, rejected) => rejected("I am from Kolkata!"));
// // let p2 = Promise.resolve("Second Promise");

// // concurrency in js (node js env)
// // Promise.race([p1, p2])
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

// // India
// // Last Console
// // I ... 1
// // I ... 3
// // I .... 4
// // I.....5
// // I ....2
// // Accio Jobs
// console.log("India");

// setTimeout(() => {
//   console.log("1st Accio Jobs");
// }, 1000);

// Promise.reject("I am the rejected Promise")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// Promise.resolve("I am Promise 1")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I am from Promise 2");
//   }, 200);
// }).then((res) => console.log(res));

// Promise.resolve("I am Promise 3").then((res) => console.log(res));
// Promise.resolve("I am Promise 4").then((res) => console.log(res));
// setTimeout(() => {
//   console.log("2nd Accio Jobs");
// }, 100);
// console.log("Last Console!");
// Promise.resolve("I am Promise 5").then((res) => console.log(res));
// Promise.all([Promise.resolve("Hi!!"), Promise.resolve("Hi 2")]).then((res) =>
//   console.log(res)
// );

// async await (sugar coted on promises)
// function returnPromise() {
//   return Promise.resolve("Partha!!");
// }

// // Inference
// // Promise<fullfilled>{45}
// async function handlePromise() {
//   try {
//     //   p1.then((res) => console.log(res));
//     let result = await returnPromise();
//     console.log(result);
//   } catch (err) {
//     console.log("err", err);
//   }
// }

// handlePromise();

// async function handleAPI() {
//   // fetch('url').then((res)=> res.json()).then((data)=> console.log(data))
//   try {
//     let response = await fetch("https://fakestoreapi.com/products");
//     let responseJson = await response.json();
//     console.log(">>result:", responseJson);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }
// handleAPI();
// Small Project Vanilla JS 



