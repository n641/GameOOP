const modalElement = document.getElementById("staticBackdrop");
const ModalContent = document.getElementById("Modal-content");
const myModal = new bootstrap.Modal(modalElement);


export class DetailsGames {
  displayModal(Game) {
    ModalContent.innerHTML = `
         <div class="row g-4">
              <div class="col-lg-4">
                <img src="${Game?.thumbnail}" class="w-100" />
              </div>
              <div class="col-lg-6">
                <h1 class="text-light fw-bold mb-1 fs-3">Title: ${Game?.title}</h1>

                <div class="mb-2 d-flex gap-2 align-items-center">
                  <h1 class="text-light fw-bold fs-13 mb-0">Category:</h1>
                  <div class="blue-1 p-1 px-2 rounded-2 text-center">
                    <p class="text-light fw-bold my-0 fs-10">${Game?.genre}</p>
                  </div>
                </div>

                <div class="mb-2 d-flex gap-2 align-items-center">
                  <h1 class="text-light fw-bold fs-13 mb-0">Platform:</h1>
                  <div class="blue-1 p-1 px-2 rounded-2 text-center">
                    <p class="text-light fw-bold my-0 fs-10">${Game?.platform}</p>
                  </div>
                </div>

                <div class="mb-2 d-flex gap-2 align-items-center">
                  <h1 class="text-light fw-bold fs-13 mb-0">Status:</h1>
                  <div class="blue-1 p-1 px-2 rounded-2 text-center">
                    <p class="text-light fw-bold my-0 fs-10">${Game?.status}</p>
                  </div>
                </div>

                <h1 class="text-light fw-bold fs-13 lh-base">
                ${Game?.description}
                </h1>

                <button class="btn btn-outline-warning text-light" id="Show Game">
                  Show Game
                </button>
              </div>
            </div>
        `;

    const ShowGameBtn = document.getElementById("Show Game");
    ShowGameBtn.addEventListener("click", function () {
      window.open(Game?.game_url);
    });

    myModal.show();
  }
}
