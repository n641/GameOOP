const navBarItems = document.querySelectorAll(".nav-item a");
const rowItem = document.querySelector(".row");

navBarItems.forEach((item) => {
  item.addEventListener("click", function () {
    const value = item.getAttribute("value");
    
    alert(value);
  });
});

let box;

for (let i = 0; i < 20; i++) {
    rowItem.innerHTML  += `
      <div class="col-3 game-item">
        <div class="card bg-transparent  " >
          <img src="imgs/logo-sm.png" class="card-img-top w-50 p-3 align-self-center" alt="..." />
          <div class="card-body">
            <p class=" text-light">An item</p>
           
          </div>
          <ul class="list-group list-group-flush bg-transparent">
            <li class="list-group-item bg-transparent text-light">An item</li>
          </ul>
        </div>
      </div>
    `;
}

