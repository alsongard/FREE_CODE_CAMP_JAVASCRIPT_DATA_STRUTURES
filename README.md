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