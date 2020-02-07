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

  cardDiv.setAttribute("name", "img");
  img.setAttribute("src", card.imgSrc);
  cardDiv.append(img);

  container.append(cardDiv);
});


  container.addEventListener("click", flipped);


function flipped(e) {
  if (e.target.classList.contains("front")) {
    console.log("hey");

    e.target.classList.remove("front");
    e.target.classList.add("back");
  }
}
