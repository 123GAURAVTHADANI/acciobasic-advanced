let container = document.querySelectorAll(".btn");
console.log(container);
container[2].style.color = "white";
container[2].style.backgroundColor = "purple";
// NodeList
// it is not array , htmlcollection is having very few props of array
// container.innerText = "Accio Jobs";

container[2].addEventListener("click", () => {
  console.log("Btn is clicked !!");
});



document.getElementById("divContainer").innerHTML = `<table border="1">
<thead>
<tr>
<th>Name</th>
<th>Age</th>
<th>Course</th>
</tr>
</thead>
<tbody>
<tr>
<td>Gaurav</td>
<td>29</td>
<td>Full Stack Dev</td>
</tr>
</tbody>
</table>`;
