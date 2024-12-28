regex :: 
To match specific characters in a string, one can use regular expression or regex in short.
any regex pattern is wrapped in forward slashes. example is : ``const regex = /hello/; const regex = /\-+/;

the + sign has a special meaning in javascript hence one should use the escape sign. ``const regex = /\+-/;``
We also have shorthand characters in regex that can be used to represent specific characters that you would like to match or search. example : ``/s`` : ``const regex= /\+-/s/;``
The pattern provided in the above regex constant would work for the word "+- hello" but not "-hello". To work we need to change the regex pattern to a set of characters that is ``const regex = /[+-/s]/`` in these you no longer need the escape character "\" on the positive sign.
Flags: one can also use flags which specifiy the pattern matching behavior. Example: ``g`` : global continue to search even after finding the first pattern. 
``const regex = /[+-/s]/g``

The ``.replace()`` function enables you to replace characters in a string with another a string. this methods takes 2 arguments. one is the first argument which is either the character  that are to be replaced(regex,string, mutliple characters) second argument the value that will replaced the matched characters.
Strings in javascrpt are immutable meaning that the replace() method returns a new string/value. 
EXample:
```
"hello".replace("/l/g", "1"); 
```
result = "he11o" //confirmed


```
function cleanInputString(str)
{
	const regex = "/[+-/s]/";
	console.log(`Original String : ${str}`);
	return str.replace(regex, "");
};
```

html inputs also allow for exponential notation : 1e10
REGEX also has another flag which is /i (remember placed at the end of the regex) : ``const regex =  /e/ig;`` : ``const regex = /[0-9]e[0-9]/``;
flag : + allows you to match a pattern more than once. ``const regex = /[0-9]+e[0-9]+/i`` rather we have a shorthand proerty for matching a digit we use: ``const regex = /\d+e\d+/i``

the .match() method is a string method that take regex argument and returns an array of the matched results /strings with the given regex.
```
const regex = /example/
const myString = "Hello this is an example"
console.log(myString.match(regex));
```
Results:
```
[
  'example',
  index: 17,
  input: 'Hello this is an example',
  groups: undefined
]
```
second time: ``[ 'example', 'EXAmple' ]``

``null`` is a primitive data type that represent fasly. When the method .match() returns null that is there is no match for the given regex.

One can print the value of an input element in javascript as shown below:

```
  const addEntrySelect = document.getElementBy("entry-dropdown");
  console.log(addEntrySelect.value);
```
however if you do not pass the ``.value`` attribute you get the input element on the console.