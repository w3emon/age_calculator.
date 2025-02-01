document.getElementById("ageForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const dobInput = document.getElementById("dob").value;
  const dob = new Date(dobInput);
  const today = new Date();

  // Check if the date is valid
  if (isNaN(dob.getTime())) {
    alert("Please enter a valid date of birth.");
    return;
  }

  // Calculate age
  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  // Adjust if the current month/day is before the birth month/day
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  // Adjust days if the current day is before the birth day
  if (ageDays < 0) {
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    ageDays += lastDayOfMonth;
    ageMonths--;
  }

  // Update the result
  document.getElementById("years").textContent = ageYears;
  document.getElementById("months").textContent = ageMonths;
  document.getElementById("days").textContent = ageDays;
});

const submit = document.querySelector("#submit");
const result = document.querySelector("#result");
const container = document.querySelector(".container");

// Check if the date is valid

submit.addEventListener("click", () => {
  if (dobInput.value == "") {
    result.style.opacity = "0";
    container.style.height = "255px";
    result.style.transition = "0ms";
  } else {
    submit.textContent = "Calculating...";
    result.style.transition = "0ms";
    result.style.opacity = "0";
    container.style.height = "255px";

    setTimeout(() => {
      submit.textContent = "Calculate";
      // result.style.display = "block";
      container.style.height = "380px";
      result.style.transition = "1500ms";

      result.style.opacity = "1";
    }, 500);
  }
});

const dobInput = document.getElementById("dob");
const dob = new Date(dobInput);

dobInput.addEventListener("change", (e) => {
  if (e.target.value == "" || isNaN(dob.getTime())) {
    console.log(e.target.value);
    result.style.opacity = "0";
    container.style.height = "255px";
    result.style.transition = "0ms";
  }
});
