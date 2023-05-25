//create an event listener for the calculate age button
const btnCalcAge = document.getElementById("btn-calc-age");
const inputDate = document.getElementById("calendar");
const resultEl = document.getElementById("result");

function calcAge() {
  const birthdayValue = inputDate.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const months = currentDate.getMonth();
  if (
    months < 0 ||
    (months === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}
btnCalcAge.addEventListener("click", calcAge);
