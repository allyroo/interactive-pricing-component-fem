let slider = document.getElementById("priceSlider");
let valueOutput = document.getElementById("valueOutput");
let pageViewsOutput = document.getElementById("pageViewsOutput");
let isYearly = document.getElementById("toggle");

let pageViewOptions = ["10k", "50k", "100k", "500k", "1M"];
let priceOptions = [8, 12, 16, 24, 36];

function updateOutput() {
  const optionsIndex = parseInt(slider.value, 10);
  pageViewsOutput.textContent = pageViewOptions[optionsIndex];
  valueOutput.textContent = priceOptions[optionsIndex];
}

updateOutput();

function toggleDiscount() {
  isYearly.checked = !isYearly.checked;
  if (isYearly.checked) {
    priceOptions = priceOptions.map((x) => x * 0.75);
    updateOutput()
    console.log(isYearly.checked);
  } else {
    console.log("False");
  }
}


slider.addEventListener("input", updateOutput);
isYearly.addEventListener("click", toggleDiscount);
// console.log(toggle.checked);
// function toggle() {
//   let isMonthly = false
//   if
//   console.log("Toggled bool is", isMonthly);

// if (isMonthly.checked) {
//   priceOptions = priceOptions.map((x) => x * 0.25);
//   console.log(toggle.checked);
// } else {
//   console.log("False");
// }
