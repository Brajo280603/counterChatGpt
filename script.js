const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const countElement = document.getElementById("count");

let count = 0;

incrementButton.addEventListener("click", () => {
  count++;
  countElement.innerHTML = count;
});

decrementButton.addEventListener("click", () => {
  count--;
  countElement.innerHTML = count;
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    console.log('Service worker registration successful');
  }).catch(function(error) {
    console.error('Service worker registration failed:', error);
  });
}
