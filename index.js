import { DetailsGames } from "./details.modal.js";
import { Games } from "./games.modal.js";
import { UIClass } from "./ui.js";

const InstanceUi = new UIClass();
const GamesDetailsInstance = new DetailsGames();
const GamesInstance = new Games();

const navBarItems = document.querySelectorAll(".nav-item a");
const rowItem = document.querySelector(".row");
// const GameItem = document.querySelectorAll(".game-item");
const Modal = document.querySelectorAll(".footer");

// filters by category
navBarItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    navBarItems.forEach((item) => {
      item.classList.remove("active");
    });

    const value = item.getAttribute("value");
    item.classList.add("active");
    
    GamesInstance.getGames(value).then((res) => {
      InstanceUi.DisplayGames(res);
    });
  });
});

// show modal
// GameItem.forEach((item) => {
//   item.addEventListener("click", function () {
//     const value = item.getAttribute("gameId");
//     console.log(value)
//     // GamesDetailsInstance.displayModal({
//     //   window:"Windows"
//     // });
//   });
// });

// // fetch games
GamesInstance.getGames("MMORPG").then((res) => {
  InstanceUi.DisplayGames(res);
});

// GamesInstance.getGameById(540)
