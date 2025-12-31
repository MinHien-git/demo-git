console.log("Hello, World!");
console.log("Hello, Javascript!", 1000);

// variable
var a = 10; // ES5
let b = 20; //ES6

//constant
const c = 30; // ES6

// compairison
// var có thể thay đổi giá trị, có thể define lại
// let có thể thay đổi giá trị, không thể define lại
// const không thể thay đổi giá trị, không thể define lại
var varSample = 1;
var varSample = 2;
console.log(varSample);

let letSample = 1;
letSample = 2;

const constSample = 1;

// kiểu dữ liệu cơ bản (primative type)
// string, number , boolean, null, undefined
// kiểu dữ liệu hỗn hợp (none primative type)
// có nhiều kiểu kiểu dữ liệu kết hợp từ primative và nonprimative
//array , function, object
let stringSample = "Hello, Javascript!";
let stringSample2 = "Hello, Javascript!";
let stringSample3 = `Hello, Javascript!`;

// number => int: integer: số nguyên , float: floating number: số thực
let numberSample = 100;
let numberSample2 = 100.5;

// number operation + - * / %
let sumResult = numberSample + numberSample2;
let subResult = numberSample - numberSample2;
let mulResult = numberSample * numberSample2;
let divResult = numberSample / numberSample2;
let modResult = numberSample % 3; // 100 / 3 = 33 dư 1
// 5 % 3 = 2;  5 / 3 = 1 dư 2
// câu hỏi số nào chia hết cho 2 (số nào là số chẵn) a % 2 == 0

// boolean : điều kiện
let booleanSample = true;
let booleanSample2 = false;

// null : không có giá trị
let nullSample = null;

// undefined : chưa được định nghĩa
let undefinedSample = undefined;

// array : mảng chứa nhiều giá trị (cùng kiểu hoặc khác kiểu)
let arraySample1 = [1, 2, 3, 4, 5]; // length = 5
// array index bắt đầu từ 0 kết thúc lại length - 1
// từ 0 -> 4
let arraySample2 = ["a", "b", "c", "d"];
let arraySample3 = [1, "a", true, null, undefined];
console.log(arraySample1[0]); // true
// object : đối tượng chứa nhiều giá trị (key-value pair)
let objectSample = {
  name: "Javascript",
  version: 1,
  isPopular: true,
};
console.log(objectSample.name); // Javascript

// function : hàm thực thi một công việc nào đó
function print(name) {
  console.log("Hello, " + name + "!");
}
function sum(a, b) {
  return a + b;
}
//sum

print("Minh Hiển");
print("Nguyễn Văn A");
console.log("Tổng là: " + sum(10, 20));
// es5
// function nameOftheFunction(parameters) {
//   //code block
// }
// es6
// const nameOftheFunction = (parameters) => {
//   //code block
// }
let a1 = 10;
let a2 = 20;
let a3 = 30;
function calculator(x, y) {
  return x + y;
}
// let b1 = a1 - a2;
// let b2 = a2 - a3;
// let b3 = a3 - a1;

let b1 = calculator(a1, a2);
let b2 = calculator(a2, a3);
let b3 = calculator(a3, a1);

let arraySample = [10, 20, 33, 42, 51]; // length = 5
// array index bắt đầu từ 0 kết thúc lại length - 1
// từ 0 -> 4

console.log("This is a sample array", arraySample[0]); // 1
// array => loop (for, while, do while, foreach) nâng cao: map, filter, reduce
// boolean => if condition, else if, else | switch case | tertiary operator | truthy & falsy
// object => for in loop, object method nâng cao: keys, values, entries, assign, ...
