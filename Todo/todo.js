const select = document.querySelector("#inputTypeSelect");
const inputType = document.querySelector("#inputTypeText");
let selectedValue = "";
let inputTypeValue = "";

function handleDisplay() {
  let getData = JSON.parse(localStorage.getItem("todos"));
  document.querySelector("#inprogress").innerHTML = "<h2>In-Progress</h2>";
  document.querySelector("#completed").innerHTML = "<h2>Completed</h2>";
  getData?.map((item) => {
    if (item.status == "inprogress") {
      document.querySelector(
        "#inprogress"
      ).innerHTML += `<div class='card'>${item.todo}</div>`;
    } else if (item.status == "completed") {
      document.querySelector(
        "#completed"
      ).innerHTML += `<div class='card'>${item.todo}</div>`;
    }
  });
}
handleDisplay();

// JSON.parse - string to object
if (!localStorage.hasOwnProperty("todos")) {
  localStorage.setItem("todos", JSON.stringify([]));
}

// event propogation
select.addEventListener("change", (e) => {
  selectedValue = e.target.value;
});

inputType.addEventListener("input", (e) => {
  inputTypeValue = e.target.value;
});

document.getElementById("formId").addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    todo: inputTypeValue,
    status: selectedValue ? selectedValue : "inprogress",
  };
  let getData = JSON.parse(localStorage.getItem("todos"));
  getData.push(obj);
  localStorage.setItem("todos", JSON.stringify(getData));
  handleDisplay();
});
