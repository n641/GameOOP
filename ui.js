import { DetailsGames } from "./details.modal.js";
import { Games } from "./games.modal.js";

const rowItem = document.querySelector(".row");
const GamesDetailsInstance = new DetailsGames();
const GamesInstance = new Games();

export class UIClass {
  DisplayGames(arr) {
    let box =``;
    for (let i = 0; i < arr.length; i++) {
       box += `
               <div class=" col-xl-3 col-lg-4 col-md-6  game-item" gameId=${arr[i]?.id}>
              <div class="card bg-transparent">
                <img
                  src="${arr[i]?.thumbnail}"
                  class="card-img-top w-100 p-3 align-self-center gameImg"
                  alt="img"
                />
      
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-end">
                    <p class="text-light mb-0 fs-12">${arr[i]?.title}</p>
                    <div class="blue-1 p-1 px-2 rounded-2">
                      <p class="text-light mb-0 fs-12">Free</p>
                    </div>
                  </div>
      
                  <p class="gray-1 text-center fw-bold fs-13 my-1 mb-0 paragraph">
                    ${arr[i]?.short_description}
                  </p>
                </div>
      
                <ul class="list-group list-group-flush bg-transparent">
                  <li class="list-group-item bg-transparent text-light">
                    <div class="d-flex justify-content-between align-items-end">
                      <div class="bg-gray-1 p-1 px-2 rounded-2">
                        <p class="text-light mb-0 fw-bold fs-10">${arr[i]?.genre}</p>
                      </div>
                      <div class="bg-gray-1 p-1 px-2 rounded-2">
                        <p class="text-light mb-0 fw-bold fs-10">${arr[i]?.platform}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          `;
    }

    rowItem.innerHTML = box

    const GameItem = document.querySelectorAll(".game-item");

    GameItem.forEach((item) => {
      item.addEventListener("click", function () {
        const value = item.getAttribute("gameId");
        GamesInstance.getGameById(value).then((res) => {
          GamesDetailsInstance.displayModal(res);
          console.log(res)
        });
      });
    });
  }
}
