let user = {
  name: "Gaurav",
  age: 29,
  password: "123",
  details: {
    address1: "UP",
  },
};
Object.defineProperty(user, "password", {
  writable: false,
  configurable: false,
});

delete user.password;
console.log(user);

// Object.freeze(user);
// delete user.age;
// console.log(user);

// 4. Object.entries
// 5. Object.freeze
// 6. Object.create
// 7. Object.seal
