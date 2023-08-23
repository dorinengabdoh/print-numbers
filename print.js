'use strict'
const start = document.getElementById('cont1')
const end = document.getElementById('cont3')
const btn = document.getElementById('conver')
const display = document.getElementById('cont2')

// Function to generate the range

const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
// Function to display the range
const displayRange = () => {
  const startNumber = parseInt(start.value)
  const endNumber = parseInt(end.value)
  if (isNaN(startNumber) || isNaN(endNumber)) {
    display.value = 'Please enter valid numbers for start and end.'
  }
  else {
    const values = range(startNumber, endNumber)
    display.value = `${values.join(', ')}`
  }
}
btn.addEventListener('click', displayRange);