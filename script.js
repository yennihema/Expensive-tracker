alert("JavaScript Loaded")
let total = 0;

function addExpense(){
aleet("button  clicked");
  let name = document.getElementById("name").value;

  let amount = Number(document.getElementById("amount").value);

  total = total + amount;

  document.getElementById("total").innerText = total;

  let li = document.createElement("li");

  li.innerText = name + " - ₹" + amount;

  document.getElementById("list").appendChild(li);

}
