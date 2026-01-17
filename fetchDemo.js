// fetch
// Get: lấy dữ liệu
// POST: gửi dữ liệu lên server
// PUT: cập nhật dữ liệu
// PATCH: cập nhật một phần dữ liệu
// DELETE: xóa dữ liệu
// Tiêu chuẩn của restAPI
// fetch(url, options)
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// promise
// pending
// fulfilled
// rejected
// async operation

const url = "https://steam2.p.rapidapi.com/search/Counter/page/1";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "bb42a9c572msh50719309b6baca1p1229f4jsn6e8471ea32dd",
    "x-rapidapi-host": "steam2.p.rapidapi.com",
  },
};
let data = [];
async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    return [];
  }
}
const gameContainer = document.querySelector("#game-container");
async function displayData() {
  data = await fetchData();
  console.log(data);
  let gamesHTML = "";
  for (let game of data) {
    gamesHTML += `
      <a class="game-card" href="https://example.com/games/${game.appid}">
        <img src="${game.imgUrl}" alt="${game.title}" />
        <h2>${game.title}</h2>
        <p>${game.price}</p>
      </a>
    `;
  }
  gameContainer.innerHTML = gamesHTML;
  // for (let game of data) {
  //   console.log(game);
  //   const gameCard = document.createElement("a");
  // <a class="game-card" href="https://example.com/games/${game.appid}"></a>
  //   gameCard.classList.add("game-card");
  //   gameCard.href = `https://example.com/games/${game.appid}`;
  //   gameCard.innerHTML = `
  //     <img src="${game.imgUrl}" alt="${game.title}" />
  //     <h2>${game.title}</h2>
  //     <p>${game.price}</p>
  //   `;
  //   gameContainer.appendChild(gameCard);
  // }
  //gameContainer.innerHTML = data;
}

displayData();
// async function fetchData() {
//   let actualData = [];
//   await fetch("./database.json")
//     .then((response) => response.json())
//     .then((jsonData) => (actualData = jsonData));
//   console.log(actualData);
// }
// fetchData();
