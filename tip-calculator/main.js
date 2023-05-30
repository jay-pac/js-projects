const btnCalc = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = (billValue * tipValue) / 100 + parseInt(billValue);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnCalc.addEventListener("click", calculateTotal);
