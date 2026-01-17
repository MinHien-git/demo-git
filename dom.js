// query type
// Get elements by tag name
const tag = document.getElementsByTagName("p"); // return array that match the tag
console.log(tag);
// get elements by class name
const classNames = document.getElementsByClassName("longparagraph"); // return array that match the class name
console.log(classNames);
// get element by id
const idName = document.getElementById("first"); // return single element that match the id
console.log(idName);
idName.style.background = "yellow";
// EX: querySelector and querySelectorAll
const selector = document.querySelector("#first li:nth-child(3)"); // return the first element that match the css selector
console.log(selector);

selector.textContent = "New content";

//p: {
// textContent: "New content"
// style : {
// color: ...
//}
//}
selector.style.color = "blue";
const a = document.querySelector("#clickbutton");
a.href = "/facebook.com";
a.target = "_blank";
a.style.textDecoration = "none";

function clickEvent() {
  const input = document.querySelector("#input-text");
  const popup = document.querySelector("#popup-div");
  const output = document.querySelector("#text-output");
  console.log(input.value);
  popup.style.display = "flex";
  output.textContent = `Congratulations ${input.value}, you have clicked the button!`;
  console.log("Button clicked");
}
function closePopup() {
  const popup = document.querySelector("#popup-div");
  popup.style.display = "none";
}

const popupBtn = document.querySelector("#popup-2");
popupBtn.addEventListener("click", function () {
  alert("Hello from anonymous function!");
});
popupBtn.addEventListener("click", clickEvent); // bind the click event to the button the click event need to be call back function
// React JSX/ Angular / Vue / typescript
// Rest API / GraphQL / NodeJS / Spring boot / Django / Flask / Laravel (php)