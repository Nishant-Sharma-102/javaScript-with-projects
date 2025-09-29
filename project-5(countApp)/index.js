// Get elements
const countValue = document.querySelector('#counter');
const incrementBtn = document.querySelector('#increment-btn');
const decrementBtn = document.querySelector('#decrement-btn');

// Increment function
function increment() {
  let value = parseInt(countValue.innerText);
  value = value + 1;
  countValue.innerText = value;
}

// Decrement function
function decrement() {
  let value = parseInt(countValue.innerText);
  value = value - 1;
  countValue.innerText = value;
}

// Event listeners
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
