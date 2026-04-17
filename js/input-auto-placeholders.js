import { sleep } from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  const input = document.getElementById("search-bar");
  const placeholders = [
    "Pirati Dei Caraibi",
    "Quo Vado",
    "The Truman Show",
    "Interstellar",
    "Matrix",
  ];

  while (true) {
    for (const text of placeholders) {
      for (const char of text) {
        input.placeholder += char;

        if (input.placeholder.length == text.length) {
          await sleep(3000)
          for (const _ of input.placeholder) {
            input.placeholder = input.placeholder.slice(0, -1);
            await sleep(10);
          }
        }

        await sleep(30);
      }
    }
  }
});
