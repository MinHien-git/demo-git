console.log(document.title);
// body
console.log(document.body);
// dom manipulation
// get Element by ID
const header = document.getElementById("header");
console.log(header);
header.style.color = "blue";
// // get Elements by Class Name
const items = document.getElementsByClassName("item");
console.log(items);
// // get Elements by Tag Name
const paragraphs = document.getElementsByTagName("li");
console.log(paragraphs);
// // query Selector
const firstItem = document.querySelector(".item:nth-child(2)");
console.log(firstItem);
firstItem.style.backgroundColor = "lightgray";

const myButton = document.querySelector(".container .btn");
console.log(myButton);
myButton.style.backgroundColor = "green";
// // query Selector All
const allItems = document.querySelectorAll(".favorite-list .item");
console.log(allItems);
allItems.forEach((item) => {
  item.style.fontWeight = "bold";
});

const allFavItem = document.getElementsByClassName("favorite-list")[0];
allFavItem.style.backgroundColor = "red";

//Event: Sự kiện
// function click_button() {
//   console.log("Button clicked!");
// }
const getOutBtn = document.getElementById("getOutBtn");
function click_handler() {
  prompt("Are you sure you want to leave?");
}
getOutBtn.addEventListener("click", click_handler);

// getOutBtn.onclick = function () {
//   prompt("Are you sure you want to leave?");
// };
const myInput = document.querySelector("#myInput");
myInput.placeholder = "THis is my code";
myInput.addEventListener("keyup", function (event) {
  console.log("Key up event:", event.target.value);
});

const submitButton = document.querySelector("#changeTextButton");
const message = document.querySelector("#message");
submitButton.addEventListener("click", function () {
  if (myInput.value === "") {
    message.style.color = "red";
    message.style.fontSize = "20px";
    message.style.fontWeight = "bold";
    message.style.fontFamily = "Arial";
    message.textContent = "Đã có lỗi yêu cầu người kiểm tra lại kết quả";
    return;
  } else {
    message.style.color = "green";
    message.style.fontSize = "20px";
    message.textContent = `You entered: ${myInput.value}`;
  }
});

const showReview = document.getElementById("showReview");
const listreview = document.querySelector("#list-customer");

showReview.addEventListener("click", function () {
  // const reviewText = document.createElement("div");
  // console.log(reviewText);
  // reviewText.textContent = "Customer 1: This is a great product!";
  // review.appendChild(reviewText);

  listreview.innerHTML += `<div>Customer 1: This is a great product!</div>`;
});

const textArea = document.getElementById("myTextarea");
const review = document.getElementById("review");
textArea.addEventListener("keyup", function (event) {
  console.log(event.target.value);
  review.innerText = event.target.value;
});
