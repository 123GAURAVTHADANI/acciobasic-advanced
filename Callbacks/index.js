fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => console.log(data));

// callback - within a callback (callback hell)
// developers get confuse
// It is a problem for the developers to understand

// function japaneese() {
//   return "I am japanese";
// }
// function greetings(callback) {
//   // japanese()
//   return callback();
// }
// function sayHello(callback) {
//   // greeting(japaneese)
//   return callback(japaneese);
// }
// console.log(sayHello(greetings));

// setTimeout(() => {
//   console.log("From First Timeout!!");
//   setTimeout(() => {
//     console.log("Second Timeout");
//     setTimeout(()=>{
//         console.log("Third timeout!!")
//         setTimeout(()=>{
//             console.log("Fourth")
//         },1000)
//     },2000)
//   }, 1000);
// }, 2000);

// Promises

// Class Hello
// const obj = new Hello()

// let parthaPromise = new Promise((resolve, reject) => {
//   reject("Partha Promise is resolved!!");
// });

// fetch("url")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// console.log(parthaPromise);

// return type of .then is a promise
// parthaPromise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// let p1 = Promise.resolve(12);
// p1.then((res) => console.log(res));

// let p2 = Promise.reject("You are not eligible for this promise");
// p2.then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );

// let p1 = fetch("https://fakestoreapi.com/products").then((res) => res.json());
// let p2 = fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
//   res.json()
// );

// Promise.allSettled([p1, p2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("err", err));
