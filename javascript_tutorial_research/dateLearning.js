const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

const year = date.getFullYear();
const Month = date.getMonth();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
const day = date.getDay();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday"]

console.log(` The time is ${year} : ${months[Month]} : ${week[day]} : ${hour} : ${minute} : ${seconds}   `);
