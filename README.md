# JAVASCRIPT ALGORITHMS AND DATA STRUCTURES

# Description
This project mainly aims at studying javascript language and applying it in your websites.
Javascript language is a scripting language that is used to make web pages interactive.
Javascript interacts with the HTML document through Document Object Model(DOM). The DOM is a tree object that represents the html document. To select or find an element within the html documnent, use the **document** object.

# Features

### Data types
javascript has several data types such as string/text and values.

### Variables
A variable is used to hold a value
To declare a variable use the sytax below:
``let variable_name``
Examples:
```
let name;
let age;

```
From the above examples, we have declared the variable without assigning them any value
> #### Initialization
Initialization is the process of assigning a value to a variable.
```
let name = "Gard Alson";
let age = 23;
const gender = "Male";
const birthCountry = "Kenya";
```
the ``const`` keyword is used to declare variable which cannot be reassigned or values changed.
the use of the ``var`` keyword is depreceated and not preferred. An example of using the var keyword to declare variable is:
``var myName = "Gard";`` not preferred.

### querySelector()
the ``querySelector()`` is used to select the CSS selector of an element.Below is an Example:
``let userNames = document.querySelector("#name");``

### function
to declare functions use the keyword ``function functionName(){}``.
Example:
>> ```
    function goStore(){
        console.log("Hello World");
    }
>> ```
the function above when called will print out the ***Hello World***  statement.

### innerText method
the innerText method is used to replace the text of an element.
Example :
>>```
    //html doc
    <p id="pText">Welcome to the bright future, where programming is an adventure</p>
    <button id="button1">Click me</button>
    //js doc
    let button1 = document.querySelector("#button");
    let pText = document.querySelector("#pText");
    button1.onclick = changeText;
    function changeText(){
        pText.innerText = "Full Stack developer journey is nearly finished";
    }
>>```

### onclick method
the onclick method is used for button elements. It can be used to initiate a process or run a function as shown in the above program. Another example will be provided.
>> ```
    //html doc
    <p class="pText">Hello World, Today is a beautiful day to code.</p>
    <button class="button2">Click 2 Continue</button>
    
    //js doc
    let buttonElem = document.querySelector(".button2");
    let pElem = document.querySelector(".pText");

    function changeText(){
        pElem.innerText = "Coding begins with learning and debugging. Happy coding day.";
    }
    buttomElem.onclick = changeText;
>>```