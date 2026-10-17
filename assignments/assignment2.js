
let billAmount = prompt("Enter your bill amount:");
let tipPercentage = prompt("Enter tip percentage:");

billAmount = Number(billAmount);
tipPercentage = Number(tipPercentage);

let tip = billAmount * tipPercentage / 100;
let totalAmount = billAmount + tip;

console.log("Subtotal: $" + billAmount);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + totalAmount);
