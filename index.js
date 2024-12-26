// console.log("First Console");
// // non blocking / sync call
// setTimeout(() => {
//   console.log("Timeout with 1000mili");
// }, 1000);

// function handleFnc() {
//   console.log("Output from Function call !!");
// }
// handleFnc();
// setTimeout(() => {
//   console.log("Timeout with 0 miliseconds");
// }, 0);
// setTimeout(() => {
//   console.log("Timeout with 100mili");
// }, 100);
// console.log("Second Console");

// callback: u pass another functions as an argument
function add(para1, para2) {
  return para1 + para2;
}

function macDonalds(callback) {
  let a = 6;
  let b = 10;
  return callback(a, b);
}
console.log(macDonalds(add));
