const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

convertBtn.addEventListener("click", function () {
  const meterToFeet = inputNumber.value * 3.281;
  const litersToGallons = inputNumber.value * 0.264;
  const kilogramsToPounds = inputNumber.value * 2.204;

  lengthEl.innerHTML = `
        <p> 
            ${inputNumber.value} meters = ${meterToFeet.toFixed(3)} feet | ${
    inputNumber.value
  } feet = 6.096 meters 
        </p>
    `;

  volumeEl.innerHTML = `
        <p> 
            ${inputNumber.value} liters = ${litersToGallons.toFixed(
    3
  )} gallons | ${inputNumber.value} gallons = 6.096 liters
        </p>
    `;

  massEl.innerHTML = `
        <p> 
            ${inputNumber.value} kilos = ${kilogramsToPounds.toFixed(
    3
  )} pounds | ${inputNumber.value} pounds = 6.096 kilos
        </p>
    `;
});
