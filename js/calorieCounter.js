//get elements use document.getElementById() 
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

//understanding regex (regular expression)
console.log("hello".replace(/[l]/g, "1"));
// const regex = /[+-\s]/g;  /g == set to global, \s = spacing 
function cleanInputString(str){
    const regex = /[+-\s]/g; //set global 
    return str.replace(regex, "");
}
/**
 * function CheckIsValid(str){
 *  const regex = /e/ig;
 *  console.log(str.replace(regex, 3));
 * }
 */


// return null if no match and an array if match
// array return complex 
// \d === match any digit + === any number of times
// i === ignore case/insensitive
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
  }
  
function addEntry() {
    console.log(`The target is : ${entryDropdown.value}`)
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
  }
  
function getCaloriesFromInputs(list){};
  
addEntryButton.addEventListener("click", addEntry);