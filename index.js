//basicsss
console.log('Hello');
window.alert('Whats cooking good looking?');
document.getElementById("myH1").textContent = 'HEllooo';
document.getElementById("myP").textContent = 'WHATS COOKING GOOD LOOKIN?!';

//variables 
var x = 100;

//lets
let age = 25;
let price = 10.99;
 
console.log(`you are ${age} years old`);
console.log(`the price is ${price}`);

//buliens or smt
let online = true;
console.log(`Bro is online ${online}`);


let fullName= "Bro Coder";
let age1 = "16";
let student = true;

document.getElementById("p1").textContent = `your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age1} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;

//arithemtical operators
let student1 = 30;
students = student1 + 1;
console.log(students);

//accepting user input (easy way)
let username;
username = window.prompt("username??: ")
console.log(username);

//accepting user input (hard way advancedd more appropriate)
    <button id="Mysubmit">submit</button>

document.getElementById("Mysubmit").onclick = function(){
username = document.getElementById("Mtrext").value;
console.log(username);
}