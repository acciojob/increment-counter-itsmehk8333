// your JS code here. If required.

const counterButton = document.querySelector("#incrementBtn");
const counterValue = document.querySelector("#counter");

counterButton.addEventListener("click", () => {
    let currentValue = parseInt(counterValue.innerText);
    alert(currentValue); // show un-incremented value
    counterValue.innerText = currentValue + 1; // update UI
});
