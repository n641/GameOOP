const Loader = document.getElementById("loader");

export class Games {
  async getGames(categoreOption) {
    Loader.classList.remove("d-none");
    Loader.classList.add("d-flex");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    console.log(categoreOption);

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoreOption}`,
      options
    );
    const response = await api.json();

    Loader.classList.add("d-none");
    Loader.classList.remove("d-flex");

    return response;
  }

  async getGameById(id) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const responseData = await api.json();

    console.log("response");
    console.log(responseData);

    return responseData;
  }
}
