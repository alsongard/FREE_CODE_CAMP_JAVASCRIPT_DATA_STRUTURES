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