var a = 5;
let b = 10;
const c = 5;
// var có thể khai báo lại và có thể gán lại dữ liệu
// let không thể khai báo lại và có thể gán lại dữ liệu
// const không thể khai báo lại và không thể gán lại dữ liệu

var a = 15;
// let b = 20

//math operator
//+ plus cộng
console.log(a + b); //15 + 10 = 25
//- minus trừ
console.log(a - b); //15 - 10 = 5
//* multiply nhân
console.log(a * b); //15 * 10 = 150
// / divide chia
console.log(a / b); //15 / 10 = 1.5
// % modulus chia lấy dư
console.log(a % b); //15 % 10 = 5

// prefix postfix
console.log(a++);
//postfix increase: trả vể giá trị hiện tại sau tăng lên
//prefix : tăng lên trước khi trả về kết quả

// a++;
// console.log(a);
// --a;
// a--;

// logic operator
// && and
// || or
// ! not
// != not equal
// !== not equal value or not equal type
// == equal value
// === equal value and equal type
// boolean
let isTrue = true;
let isFalse = false;
let increase = 10 > 5;
let number = 0;
// truthy and falsy
// falsy gia tri la 0, null, undefined, NaN, false, ""
if (number) {
  console.log("number is truthy");
} else {
  console.log("number is falsy");
}

// if else
let age = 16;
let parentPermission = true;
if (age >= 18 || parentPermission == true) {
  console.log("can drink alcohol");
} else {
  console.log("can not drink alcohol");
}
// toan tu 3 ngoi terrnary operator
//condition ? result1 : result2
age >= 18
  ? console.log("can drink alcohol")
  : console.log("can not drink alcohol");

let target = 10;
let saving = 15;
if (saving < target) {
  console.log("Muc tieu chua dat duoc");
} else if (saving == target) {
  console.log("Muc tieu vua dat duoc");
} else {
  console.log("Muc tieu da vuot ki vong");
}

saving < target
  ? console.log("Muc tieu chua dat duoc")
  : saving == target
  ? console.log("Muc tieu vua dat duoc")
  : console.log("Muc tieu da vuot ki vong");

//switch case
let month = 1;
if (month === 1) {
  console.log("Thang 1");
} else if (month == 2) {
  console.log("Thang 2");
} else if (month == 3) {
  console.log("Thang 3");
} else if (month == 4) {
  console.log("Thang 4");
}

switch (month) {
  case 1:
    console.log("Thang 1");
    break;
  case 2:
    console.log("Thang 2");
    break;
  case 3:
    console.log("Thang 3");
    break;
  case 4:
    console.log("Thang 4");
    break;
  default:
    console.log("Khong phai thang 1,2,3,4");
}

let stringNumber = "5";
let numberNumber = 5;
console.log("==", stringNumber == numberNumber); //true
console.log("===", stringNumber === numberNumber); //false

function sum(x, y) {
  return x + y;
}
console.log("sum:", sum(5, 10));
function printHello() {
  console.log("Hello");
}
printHello();
