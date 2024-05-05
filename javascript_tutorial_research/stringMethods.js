//capitalizing string in javascript
//string are immutable

let sentence = "hello world welcome to javascript tutorials";
function capitalizeString(mystring){
	return mystring.charAt(0).toUpperCase() + mystring.slice(1);
}
let new_sentence = capitalizeString(sentence);
console.log(new_sentence);
//map function
