// let username = "";
// let password = "";
// document.getElementById("username").addEventListener("input", (event) => {
//   username = event.target.value;
//   //   console.log(">>username", username);
//   //   localStorage.setItem("username", username);
//   document.getElementById("labelusername").innerText = `Username: ${username}`;
//   document.getElementById("username").style.outline = "red 1px solid";
// });
// document.getElementById("password").addEventListener("input", (event) => {
//   password = event.target.value;
//   console.log(">>password", password);
//   //   localStorage.setItem("password", event.target.value);
// });

// document.getElementById("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   let user = { username: username, password: password };
//   localStorage.setItem("userDetails", JSON.stringify(user));

//   //   alert("Submit btn is clicked !!");
// });
// Async (callback, promises)

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.map((item) => {
      document.getElementById("container").innerHTML += `
        <div>
        <h1>${item.title}</h1>
        <img src=${item.image} width="200px" />
        <button>Add to Cart</button>
        </div>`;
    })
  );
