// let input_string = "I am from AccioJobs";
// // // console.log(input_string.concat(" AccioJobs", " Kumar"));
// // // console.log(input_string);

// // let output = input_string.replace("I", "We").replace("am", "kkk");
// // console.log(output);
// // console.log(input_string);
// let input_array = ["I", "AM", "FROM", "ACCIO"];
// // for (let i = 0; i < input_string.length; i = i + 1) {
// //   console.log(input_string.at(i));
// // }

// let string = "";
// for (let x of input_string) {
//   string += x;
// }
// console.log(string);

// Object Methods

// 1 . Object.assign()
// 2. List of Object Values
//3. List of Object Key
// console.log(Object.values(user));

// console.log(Object.keys(user));

// let clonedUser = Object.assign({}, user);
// console.log(clonedUser);

// console.log(user.hasOwnProperty("details"));

// deep copy -
// 1. object to string - JSON.stringify()
// 2. string to an object - JSON.parse()

// let deepCopy = JSON.parse(JSON.stringify(user));
// deepCopy.details.address1 = "India";
// console.log(deepCopy);
// console.log(user);

// console.log(JSON.parse(JSON.stringify(user)));

// let deepCopy =
// console.log(deepCopy);

// let cloneObj = { ...user };
// cloneObj.age = 30;
// cloneObj.details.address1 = "India";
// console.log(cloneObj);
// console.log(user);

// shallow copy and deep copy
// let input_array = [1, 2, 3];
// Spread opeartor in ES6 (ECMA Script) 2015 ??

// let clonedUser = { ...user, course: "FSD" };
// let clonedArray = [...input_array, 10, 109];
// console.log(clonedArray);
