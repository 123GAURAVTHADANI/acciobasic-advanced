let createImage = document.createElement("img");
let container = document.createElement("p");
document.body.appendChild(createImage);
document.getElementById("divContainer").style.border = "1px solid red";
document.getElementById("divContainer").appendChild(container);

container.innerText = "I am from accio!!";

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => (createImage.src = data.message));
