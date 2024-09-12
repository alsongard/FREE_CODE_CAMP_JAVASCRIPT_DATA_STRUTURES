const character = "#";
const count = 8;
const rows = [];
let inverted = true;


/*padRow takes 2 arguments rowNumber which is given in the loop below as i and rowCount given
count(8). the character symbol is repeated based by the value of rowCount(8) - rowNumber(value of i)
,the character value is repeated based on rowNumber(value of i) * 2 -1 changing the character
result in a different symbol used for the pyramid.
*/
function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);