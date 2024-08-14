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
To call a function use ``goStore()``
also one could assign the result of a function  to a variable as shown below:
``let answer = goStore()``


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
### Math.random()
the Math.random() function is used to generate random numbers. If no argument is given it generates a floor point number between 0(inclusive) and 1(exclusive).
Inclusive means that the end point is a valid value while exclusive means that the end number is not valid.
``let userNumber = Math.random()``
the above function will only generate numbers from 0 to 0.999.. . It will not incude the value 1.
``userNumber = Math.random() * 10 + 1;``
the above program will generate numbers from 1 to 10.

### Math.floor()
the Math.floor() function is used to round of a floating number to the nearest whole number or to an interger.
```
    userNumber;
    userNumber = Math.floor(Math.random() * 1000 + 100);
    console.log(userNumber);
```
the above program will generate random numbers from  100 to 1100. 

### escape character
the escape character, **\\** is used to prevent the program from identifying and processing special charactes.
Example:
```
    console.log("hi there, welcome to \"JavaScript\".") 
```