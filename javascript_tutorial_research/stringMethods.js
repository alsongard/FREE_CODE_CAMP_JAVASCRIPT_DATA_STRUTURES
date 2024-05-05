//capitalizing string in javascript
//string are immutable

let sentence = "hello world welcome to javascript tutorials";
function capitalizeString(mystring){
	return mystring.charAt(0).toUpperCase() + mystring.slice(1);
}
let new_sentence = capitalizeString(sentence);
console.log(new_sentence);

const numbers = [1,2,3,4];
let new_numbers = numbers.map(function(item){
	return item ** 2;
})
console.log(new_numbers);

//map function
//challenge 2:
const names = ['john', 'peter', 'susan', 'anna'];
let new_names = names.map(function(items){
	return items.charAt(0).toUpperCase() + items.slice(1);
})
console.log(new_names);

//challenge3:
// const myarray = ["Rachel", "Chandler", "Monica", "Ross", "Joey"];
// let new_array = myarray.map((item)=>{
// 	return <p> + item + </p>
// })
// console.log(new_array)

//concatenation
//using the + symbols
const str1 = "Hello";
const str2 = "World";
console.log(str1 + " " + str2);
//using the concat() method
let new_string = str1.concat(" ", str2, " ", "This is a gamechanger.");
console.log(new_string);
//template literals backticks
let user_name = "Alice";
let greet = `Hello ${user_name}`;
console.log(greet);
//join method
let parts = ["This","is","a","sentence"];
let new_parts = parts.join(" ");
console.log(new_parts);


