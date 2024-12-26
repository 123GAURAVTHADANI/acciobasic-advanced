let gridContainer = document.getElementById("grid");
let colorPick = "#000000";
let noOfGrid = 20;

function generateGrid() {
  gridContainer.style.gridTemplateColumns = `repeat(${noOfGrid},1fr)`;
  for (let i = 0; i < noOfGrid * noOfGrid; i++) {
    let createElement = document.createElement("div");
    createElement.classList.add("grid-item");
    gridContainer.appendChild(createElement);
  }
}
generateGrid();

function removeAll() {
  let gridElement = document.querySelectorAll(".grid-item");
  // NodeList()
  gridElement.forEach((item) => {
    item.style.backgroundColor = "white";
    item.style.border = "1px solid black";
  });
}

document.getElementById("grid").addEventListener("click", (event) => {
  if (event.target && event.target.matches("div.grid-item")) {
    // removeAll();
    event.target.style.backgroundColor = colorPick;
  }
});

document.getElementById("color").addEventListener("change", (event) => {
  colorPick = event.target.value;
});

document.getElementById("reset").addEventListener("click", () => {
  removeAll();
});

document.getElementById("noOfGrid").addEventListener("input", (event) => {
  noOfGrid = event.target.value;

  generateGrid();
});

// // document.getElementById("box").addEventListener("click", () => {
// //   console.log("Box-1 is clicked!");
// // });

// // document.getElementById("box-2").addEventListener("click", (event) => {
// //   event.stopPropagation();
// //   console.log("Box-2 is clicked!");
// // });

// // document.getElementById("btn").addEventListener("click", (event) => {
// //   console.log("Button is clicked!");
// // });

// console.log(null && null);
