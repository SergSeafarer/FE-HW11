const numbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]; 
const arrPositive = numbers.filter(number => number > 0);
const positiveNumberQuantity = arrPositive.length;
const sumPositive = arrPositive.reduce(function(allNumbers, value) {
  return allNumbers + value;
}, ); 
document.write('Task 1: ' + 'Quantity of positive numbers = ' + positiveNumberQuantity + ' ' + JSON.stringify(arrPositive));
document.write('<br>' + 'Summary of positive numbers = ' + sumPositive);

document.write('<br>' + '<br>' + 'Task 2: ');
let minNumber = numbers[0];
let minNumberIndex = 0;
for (let i = 1; i <= numbers.length; i++) {
  if(numbers[i] < minNumber) {
    minNumber = numbers[i];
    minNumberIndex = i;
  }
};
document.write('Minimum number is: ' + minNumber);
document.write('<br>' + 'Index of minimum number is: ' + minNumberIndex);

document.write('<br>' + '<br>' + 'Task 3: ');
let maxNumber = numbers[0];
let maxNumberIndex = 0;
for(let i = 1; i <= numbers.length; i++) {
  if(numbers[i] > maxNumber) {
    maxNumber = numbers[i];
    maxNumberIndex = i;
  }
}
document.write('Max number is: ' + maxNumber);
document.write('<br>' + 'Index of max number is: ' + maxNumberIndex);

document.write('<br>' + '<br>' + 'Task 4: ');
const arrNegative = numbers.filter(number => number < 0);
const negativeNumberQuantity = arrNegative.length;
document.write('Quantity of negative numbers = ' + negativeNumberQuantity + ' ' + JSON.stringify(arrNegative));

document.write('<br>' + '<br>' + 'Task 5: ');
const oddNumber = arrPositive.filter(number => number % 2 !== 0);
const oddNumberQuantity = oddNumber.length;
document.write('Quantity of odd numbers = ' + oddNumberQuantity + ' ' + JSON.stringify(oddNumber));

document.write('<br>' + '<br>' + 'Task 6: ');
const evenNumber = arrPositive.filter(number => number % 2 === 0);
const evenNumberQuantity = evenNumber.length;
document.write('Quantity of even numbers = ' + evenNumberQuantity + ' ' + JSON.stringify(evenNumber));

document.write('<br>' + '<br>' + 'Task 7: ');
const evenNumbersSum = evenNumber.reduce(function(allNumbers, number) {
  return allNumbers + number;
}, );
document.write('Summary of even numbers = ' + evenNumbersSum);

document.write('<br>' + '<br>' + 'Task 8: ');
const oddNumbersSum = oddNumber.reduce(function(allNumbers, number) {
  return allNumbers + number;
}, );
document.write('Summary of odd numbers = ' + oddNumbersSum);

document.write('<br>' + '<br>' + 'Task 9: ');
const multOfPositiveNumbers = arrPositive.reduce(function(allNumbers, number) {
  return allNumbers * number;
}, )
document.write('Result of multiplying positive numbers = ' + BigInt(multOfPositiveNumbers));

document.write('<br>' + '<br>' + 'Task 10: ');
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] !== maxNumber) {
    numbers[i] = 0;
  }
}
document.write(JSON.stringify(numbers));