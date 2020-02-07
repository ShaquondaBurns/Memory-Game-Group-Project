let container = document.querySelector(".card-container");

let cardArray = [
  {
    name: "dog",
    imgSrc: "dalmatian.jpg"
  },

  {
    name: "dog",
    imgSrc: "dalmationdoghouse.jpg"
  },

  { name: "cat", imgSrc: "cat.jpg" },

  {
    name: "cat",
    imgSrc: "litterbox.jpg"
  }
];

cardArray.forEach(card => {
  let cardDiv = document.createElement("div");
  let img = document.createElement("img");

  cardDiv.setAttribute("data-name", card.name);
  img.setAttribute("src", card.imgSrc);
  cardDiv.append(img);
  cardDiv.classList.add("front");
  container.append(cardDiv);
});

container.addEventListener("click", flipped);

function flipped(e) {
  // console.log("hey");
  e.target.classList.add("back");
  if (e.target.getAttribute("data-name")) {
    console.log(e.target.getAttribute("data-name"));
  }
}
