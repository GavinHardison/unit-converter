/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-button")
const lengthConversion = document.getElementById("length-conversion")
const volumeConversion = document.getElementById("volume-conversion")
const massConversion = document.getElementById("mass-conversion")
const inputNumber = document.getElementById("input-number")

convertBtn.addEventListener("click", function() {
    const inputValue = inputNumber.value
    const feetValue = (inputValue * 3.281).toFixed(3)
    const meterValue = (inputValue / 3.281).toFixed(3)
    const gallonValue = (inputValue * 0.264).toFixed(3)
    const literValue = (inputValue / 0.264).toFixed(3)
    const poundValue = (inputValue * 2.204).toFixed(3)
    const kilogramValue = (inputValue / 2.204).toFixed(3)

    lengthConversion.textContent = `${inputValue} meters = ${feetValue} feet | ${inputValue} feet = ${meterValue} meters`
    volumeConversion.textContent = `${inputValue} liters = ${gallonValue} gallons | ${inputValue} gallons = ${literValue} liters`
    massConversion.textContent = `${inputValue} kilograms = ${poundValue} pounds | ${inputValue} pounds = ${kilogramValue} kilograms`
})