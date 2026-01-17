let arr = [10, 20, 30, 40, 50];
// start index = 0
// end index = length - 1 = 5 - 1 = 4
//for(start; condition; step) {code block}
// while (condition) {code block}
// do {code block} while (condition)
// condition > result
// tuoi > 21 => du dieu kien
// if(condition) {code block} else {code block}
let tuoi = 25;
if (tuoi > 21) {
  console.log("Du dieu kien");
} else if (tuoi === 21) {
  console.log("Vua du dieu kien");
} else {
  console.log("Khong du dieu kien");
}
// condition = true or false
// expression ==, >=, <=, !=, ===, !==, >==, <==
// a=b => code a == b a > b, a < b, a != b
// == : so sánh giá trị
// === : so sánh giá trị và kiểu dữ liệu
console.log("Kieu du lieu cua 5", typeof "5");
console.log("==", 5 == "5");
console.log("===", 5 === "5");
// logical operator: &&(and), ||(or), !(not)
// and: tất cả điều thỏa mãn
// or : chi cần 1 trong các điều kiện thỏa
// not: phủ định điều kiện
tuoi = 14;
let permision = true;
if ((tuoi > 18 && tuoi < 60) || permision == true) {
  console.log("Du dieu kien lam viec");
} else {
  console.log("Khong du dieu kien lam viec");
}

// truthy, falsy
// falsy values: false, 0, "", null, undefined, NaN
// truthy values: all values that are not falsy
// giá trị 1 number mà bằng 0 => false (falsy)

let testValue = 10;
// !testvalue => false
if (testValue) {
  console.log("Qua Mon");
} else {
  console.log("Rot Mon");
}

let status = 1;
if (status === 0) {
  console.log("Online");
} else if (status === 1) {
  console.log("Away");
} else if (status === 2) {
  console.log("Inactive");
} else {
  console.log("Offline");
}

// switch case
switch (status) {
  case 0:
  case 1:
    console.log("Online");
    break;
  case 2:
    console.log("Inactive");
    break;
  default:
    console.log("Offline");
    break;
}
// condition most of the time >,<, = kết quả trả về true/false
// vài nâng cao truethy và falsy
let drinkAge = 18;
if (drinkAge >= 18) {
  console.log("Du tuoi uong ruou");
} else {
  console.log("Chua du tuoi uong ruou");
}
// ternary operator
// condition ? code block if true : code block if false
drinkAge >= 18
  ? console.log("Du tuoi uong ruou")
  : console.log("Chua du tuoi uong ruou");
// condition ? result 1 : result 2

// loop for, while, do while
// advance map, foreach, filter, reduce
// array start from 0 and end at length -1
// 0 -> 4
let x = 1;
//x++; // post fix increamental
// đầu tiên in giá trị của x rồi sau đó mới giá trị lên 1
console.log("Gia tri cua x: ", ++x);
console.log("Gia tri cua x: ", x);

//++x; // prefix increamental
// console.log("Gia tri cua x: " + x);
const loopArray = [100, 200, 300, 400, 500, 600];
for (let i = 0; i < loopArray.length; ++i) {
  console.log("Index: " + i + ", Value: " + loopArray[i]);
}

//while(boolean condition) {code block}
let index = 0;
while (index < loopArray.length) {
  console.log("Index while: " + index + ", Value: " + loopArray[index]);
  index++;
}

let numbers = [1, 2, 3, 5, 6, 0, 8, 9, 10, 8];
let sum = 0;
let breakPoint = 0;
for (let i = 0; i < numbers.length; ++i) {
  if (numbers[i] === breakPoint) {
    console.log("Phát hiện điểm bị nhập sai tại index", i);
    break;
  }
  if (numbers[i] % 2 !== 0) continue;
  console.log("Index: " + i + ", Value: " + numbers[i]);
  sum += numbers[i];
}
console.log("Tong cua mang numbers: ", sum);

//do {code block} while (condition)

let count = 0;
do {
  console.log("Count do while: ", count);
} while (count > 0);

for (let i = loopArray.length - 1; i >= 0; --i) {
  console.log("Index: " + i + ", Value: " + loopArray[i]);
}

//ES6
// for...of
// for (let value of numbers) {
//   console.log("Value for of: ", value);
// }
for (let index in numbers) {
  console.log("Index for in: ", index, numbers[index]);
}
// loop for object
const MinhHien = {
  name: "Minh Hien",
  age: 26,
  address: "HCM",
};
for (let key in MinhHien) {
  console.log("Key: ", key, "Value: ", MinhHien[key]);
}
for (let number of numbers) {
  console.log("Value for of: ", number);
}

let keys = Object.keys(MinhHien);
console.log("Keys of MinhHien object: ", keys);
let values = Object.values(MinhHien);
console.log("Values of MinhHien object: ", values);
let a = ["Minh hien", 2, 3, 4, 3, 56];
let search = 3;
let hashTable = {
  3: "Minh hien",
  key3: 3,
};
//ES6 map, filter, foreach
var result = 5; //ES5
const result2 = 10;
let result3 = 15;
let array1 = [1, 2, 3, 4, 5];
// arrow function
function sumNormal(a, b) {
  return a + b;
}
const sumArrow = (a, b) => a + b;
const condition2 = (a, b) => (a > b ? true : false);
const condition = (a, b) => {
  if (a > b) {
    return true;
  } else if (a < b) {
    return null;
  } else {
    return false;
  }
};

console.log("Sum function: ", sumArrow(10, 20));
// forEach
array1.forEach((value, index) => {
  console.log("forEach index: ", index, "value: ", value);
});

//foreach , map ,filter. reduce, some, every
//array method có ba loại ba tham số khác nhau
console.log("-----");
// [1, 2, 3, 4, 5];
array1.forEach((value) => console.log("forEach value: ", value));
console.log("-----");
array1.forEach((value, index) =>
  console.log("forEach value: ", value, "index:", index)
);
console.log("-----");

array1.forEach((value, index, array) =>
  console.log("forEach value: ", value, "index:", index, "array:", array)
);
console.log(
  array1.forEach((value, index, array) =>
    console.log("forEach value: ", value, "index:", index, "array:", array)
  )
);
//map
console.log("-----map---------");
array1.map((value) => console.log("map value: ", value));

console.log("-----");
array1.map((value, index) =>
  console.log("map value: ", value, "index:", index)
);
console.log("-----");

array1.map((value, index, array) =>
  console.log("map value: ", value, "index:", index, "array:", array)
);
let copyArray = array1;
console.log("Copy array using map:", copyArray);
// array1[0] = 1000;
// console.log(copyArray);
let mapArray = array1.map((value, index) => value * 2);
console.log("New array using map:", mapArray);
array1[0] = 1000;
console.log("Original array after modifying:", mapArray);
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let filterArray = numbers2.filter((value) => value % 2 === 0);
console.log("Filtered array (even numbers):", filterArray);

let someArray = numbers2.some((value) => value > 10);
console.log("Some array (any value > 8):", someArray);

let everyArray = numbers2.every((value) => value > 1);
console.log("Every array (any value >= 1):", everyArray);
// spread operator
let arrayA = [1, 2, 3];
let arrayB = [4, 5, 6];
let arrayD = [4, 7, 9];
let arrayC = [...arrayA, ...arrayB, ...arrayD];

arrayA[0] = 100;
console.log("Array C using spread operator:", arrayC);
// object spread operator
let person = {
  name: "Minh Hien",
  age: 26,
  address: "HCM",
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

console.log("Person object:", person.name, person.age, person.address);
let { hien, name, age, address } = person;
console.log(hien);
console.log(name);

let person1 = { a: 1, b: 2 };
let person2 = { ...person1, c: 3, d: 4, a: 100 };
console.log("Person2 object using spread operator:", person2);
