//fetch(<url>)
// Promise
// fullfiled => du lieu duoc lay ve
// pending => du lieu dang duọc lay về
// rejected => dữ liệu không lấy được
// khi fetch có một khoảng delay nhất định để lấy dữ liệu
// xử lí bất đồng bộ
let a = {
  a: 1,
};
let d = {};

// fetch("./data/data.json")
//   .then(function (response) {
//     console.log("Response:", response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("Get data success:", data);
//   });

// console.log("data", d);

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then(function (response) {
//     console.log("Response:", response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("Get todo list success:", data);
//   });

// async function: hàm bất đồng bộ nhiệm vụ của hàm là lấy dữ liệu bất đồng bộ
// await: chờ dữ liệu trả về từ hàm bất đồng bộ

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then(function (response) {
//     console.log("Response:", response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("Get data success:", data);
//   });

// console.log("data", d);

async function fetchTodoList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  console.log("Get todo list success:", data);
  d = data;
  console.log("data", d);
  return data;
}
fetchTodoList();

async function sum(a, b) {
  return a + b;
}

sum(1, 2).then(function (result) {
  console.log(result * 2);
});
console.log(sum(1, 2));
fetchTodoList().then(function (data) {
  console.log("data in then:", data);
});

// Call back function
function renderTodoList() {
  let bodyContainer = document.querySelector("body");
  fetchTodoList().then(function (data) {
    console.log("Render todo list");
    data.forEach((element) => {
      bodyContainer.innerHTML += `<div>
            <h3>${element.title}</h3>
            <p>Completed: ${element.completed}</p>
        </div>`;
    });
    console.log("Render xong");
  });
}

// async function
async function renderTodoListAsync() {
  let bodyContainer = document.querySelector("body");
  let data = await fetchTodoList();
  data.forEach((element) => {
    bodyContainer.innerHTML += `<div>
            <h3>${element.title}</h3>
            <p>Completed: ${element.completed}</p>
        </div>`;
  });
}

renderTodoList();
