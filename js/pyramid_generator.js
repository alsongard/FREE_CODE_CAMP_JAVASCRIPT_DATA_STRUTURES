const character = "#";
const count = 8;
const rows = [];

/*padRow takes 2 arguments rowNumber which is given in the loop below as i and rowCount given
count(8). the character symbol is repeated based by the value of rowCount(8) - rowNumber(value of i)
,the character value is repeated based on rowNumber(value of i) * 2 -1 changing the character
result in a different symbol used for the pyramid.
*/
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}
console.log(rows);
let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);