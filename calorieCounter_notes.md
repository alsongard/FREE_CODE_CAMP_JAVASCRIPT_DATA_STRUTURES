# CALORIE COUNTER


# HTML FORM
step 1: learn how to create a calorie counter form that enables  useers to input their daily calorie budget and calorie counts of various meals. 
The form will then calculate whether the user is in a calorie deficit or surplus. 


In input elements, to allow only positive numbers only use the min attribute. 
Example:
```
<input type="number" min="0" placeholder="Enter budget"/>
```

Step 4: 
Create a fieldset with the id="based on food" within add Legend with name of Food in capitalize and a div with the class="input-container"
fieldset id="breakfast"
create the following fieldset for breakfast, lunch, snacks, exercise
```
<fieldset id="lunch">
	<legend>Lunch</legend>
	<div class="input-container"></div>
</fieldset>
```

Step 8:
This div will be used to enalbe users to input their calorie counts the food they want to set. Will be done using a dropdownmenu and button to add meal type
add another div with the class="controls"
The control div is show below:
```
<div class="controls">
            <span>
              <label for="entry-dropdown">Add food or exercise:</label>
              <select id="entry-dropdown" name="options">
                <option value="breakfast" selected>Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snacks">Snacks</option>
                <option value="exercise">Exercise</option>
              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>
          <div>
            <button type="submit">
              Calculate Remaining Calories
            </button>
            <button type="button" id="clear">Clear</button>
          </div>
```

```
<form id="calorie-counter">
          <label for="budget">Budget</label>
          <input
            type="number"
            min="0"
            id="budget"
            placeholder="Daily calorie budget"
            required
          />
          <fieldset id="breakfast">
            <legend>Breakfast</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="lunch">
            <legend>Lunch</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="dinner">
            <legend>Dinner</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="snacks">
            <legend>Snacks</legend>
            <div class="input-container"></div>
          </fieldset>
          <fieldset id="exercise">
            <legend>Exercise</legend>
            <div class="input-container"></div>
          </fieldset>
          <div class="controls">
            <span>
              <label for="entry-dropdown">Add food or exercise:</label>
              <select id="entry-dropdown" name="options">
                <option value="breakfast" selected>Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snacks">Snacks</option>
                <option value="exercise">Exercise</option>
              </select>
              <button type="button" id="add-entry">Add Entry</button>
            </span>
          </div>
          <div>
            <button type="submit">
              Calculate Remaining Calories
            </button>
            <button type="button" id="clear">Clear</button>
          </div>
        </form>
```


# javascript 
To access an element with a given id use the ``document.getElementById()``
```
const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;
```

**Step 18**
(input values accessed in javascript are of string datatype by default)
NOTE: Values from an HTML input field are received as strings in JavaScript. You'll need to convert these strings into numbers before performing any calculations. Converting string values into numbers will be covered in a future step.

**Step 26**
```
function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}
console.log(cleanInputString("+-99"));
```

**step 32**
The + modifier in a regex allows you to match a pattern that occurs one or more times. To match your digit pattern one or more times, add a plus after each of the digit character classes. For example: [0-9]+.
```
function isInvalidInput(str) {
  const regex = /[0-9]+e[0-9]+/i;
}
```
**step 33**
There is a shorthand character class to match any digit: \d. Replace your [0-9] character classes with this shorthand.
```
 const regex = /\d+e\d+/i;
```


**step 44**
the match() method is a string method, which returns an array of the matched results. This array can contain the first match or all the matches if the global is used.
```
const myString = "hello world example hello mars example";
const regex = /hello/;
let result = myString.match(regex);
```

**step 41**
```
const targetInputContainer = document.querySelector(targetId + " .input-container");
```

``  const targetInputContainer = document.querySelector(`${targetId} .input-container`);``

```
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
}
```

**Step 45**
The targetInputContainer == ``"lunch .input-contianer"``
get all input of type== text and then get the length. This gives you the number of entries for the person has entered for each given entry(break, lunch, dinner, exercise)
```
const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
 ```


**step 48**
```
const HTMLString = `
<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
<input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
`
```

**Step 51**
```
const HTMLString = `
<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
<input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
<label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
<input id="${entryDropdown.value}-${entryNumber}-calories" type="number" min="0" placeholder="Calories"/>
`;
```

**Step 52**
The innerHTML property sets or returns the HTML content inside an element.
Example is show below:
```
<form class="userForm">
    <div class="form-inputs">
        <label>Enter name</label>
        <input type="text" placeholder="Enter full name..."/>

    </div>

    <button type="button">Add Entry</button>
    <input type="submit" value="Submit"/>
</form>

<script type="text/javascript">
    let myBtn = document.querySelector("button");
    let formInputs = document.querySelector(".form-inputs");
    const newFormElements = `
        <label for="age">Enter age</label>
        <input type="number" placeholder="Age..."/>
    `

    myBtn.addEventListener("click", ()=>{
        formInputs.innerHTML += newFormElements;
    })
</script>
```