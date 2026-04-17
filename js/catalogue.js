const media = [
  {
    name: "2001: Un'Odissea Nello Spazio",
    director: "Stanley Kubrick",
    genres: ["Fantascienza"],
  },
  {
    name: "Pirati Dei Caraibi: Maledizione Della Prima Luna",
    directors: "Gore Verbinski",
    genres: ["Azione", "Avventura", "Fantasy"],
  },
  {
    name: "Pirati Dei Caraibi 2: La Maledizione Del Forziere Fantasma",
    directors: "Gore Verbinski",
    genres: ["Azione", "Avventura", "Fantasy"],
  },
  {
    name: "Pirati Dei Caraibi 3: Ai Confini Del Mondo",
    directors: "Gore Verbinski",
    genres: ["Azione", "Avventura", "Fantasy"],
  },
  {
    name: "Quo Vado",
    directors: "Gennaro Nunziante",
    genres: ["Commedia"],
  },
  {
    name: "Star Wars Episodio I: La Minaccia Fantasma",
    directors: "George Lucas",
    genres: ["Fantascienza"],
  },
  {
    name: "Star Wars Episodio II: L'Attacco Dei Cloni",
    directors: "George Lucas",
    genres: ["Fantascienza"],
  },
  {
    name: "Star Wars Episodio III: La Vendetta Dei Sith",
    directors: "George Lucas",
    genres: ["Fantascienza"],
  },
  {
    name: "The Lego Movie",
    directors: ["Phil Lord", "Christopher Miller"],
    genres: ["Animazione", "Commedia"],
  },
  {
    name: "The Truman Show",
    directors: "Peter Weir",
    genres: ["Commedia", "Dramma"],
  },
  {
    name: "Twin Peaks",
    directors: "David Lynch",
    genres: ["Horror", "Mistero", "Surreale"],
  },
];

document.addEventListener("DOMContentLoaded", async () => {
  const wrapper = document.getElementById("catalogue-wrapper");
  const searchBar = document.getElementById("search-bar");
  let filteredMedia = media;

  function appendMedia() {
    wrapper.replaceChildren();

    for (const elem of filteredMedia) {
      const img = document.createElement("img");

      img.src = `/img/posters/${elem.name}.jpg`;
      img.title = elem.name;
      img.classList.add("hover-effect", "hover-scale");

      wrapper.appendChild(img);
    }
  }

  appendMedia();

  searchBar.addEventListener("input", (e) => {
    filteredMedia = media.filter((item) =>
      item.name.toLowerCase().includes(e.target.value),
    );

    appendMedia();
  });

  for (const filter of document.querySelectorAll(
    'main nav ul input[type="checkbox"]',
  )) {
    filter.addEventListener("change", (e) => {
      const input = e.target;
      const inputText = input.parentNode.textContent.trim();

      switch (input.dataset.filterType) {
        case "genre":
          console.log(inputText)
          console.log(filteredMedia.filter((item) =>
            item.genres.includes(inputText),
          ))
          // filteredMedia = ;
          break;

        default:
          break;
      }
    });
  }
});
