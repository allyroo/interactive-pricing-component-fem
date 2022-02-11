let slider = document.getElementById("priceSlider");
let valueOutput = document.getElementById("valueOutput");
let pageViewsOutput = document.getElementById("pageViewsOutput");
let isYearly = document.getElementById("toggle");

let pageViewOptions = ["10K", "50K", "100K", "500K", "1M"];
let priceOptions = [6, 12, 16, 24, 36];

function updateOutput() {
  const optionsIndex = parseInt(slider.value, 10);
  const price = priceOptions[optionsIndex];
  pageViewsOutput.textContent = pageViewOptions[optionsIndex];
  const finalPrice = isYearly.checked ? price * 0.75 : price;
  valueOutput.textContent = finalPrice.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  });
}

updateOutput();

slider.addEventListener("input", updateOutput);
isYearly.addEventListener("click", updateOutput);
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
