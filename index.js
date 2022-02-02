let slider = document.getElementById("priceSlider");
let valueOutput = document.getElementById("valueOutput");
let pageViewsOutput = document.getElementById("pageViewsOutput");

let pageViewOptions = ["10k", "50k", "100k", "500k", "1M"];
let priceOptions = [8, 12, 16, 24, 36];

function updateOutput() {
  const optionsIndex = parseInt(slider.value, 10);
  pageViewsOutput.textContent = pageViewOptions[optionsIndex];
  valueOutput.textContent = priceOptions[optionsIndex];
}

updateOutput();

slider.addEventListener("input", updateOutput);
