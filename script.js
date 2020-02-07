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
  },
  {
    name: "bird",
    imgSrc: "bird.jpg"
  },
  {
    name: "bird",
    imgSrc: "bird cage.jpg"
  },
  {
    name: "fish",
    imgSrc: "fishpet.jpeg"
  },
  {
    name: "fish",
    imgSrc: "fish bowl.jpg"
  },
  {
    name: "lizard",
    imgSrc: "lizard.jpg"
  },
  {
    name: "lizard",
    imgSrc: "terrarium.jpg"
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

// let counter = 0;
let clickedElements = [];
function flipped(e) {
  if (clickedElements.length === 1) {
    clickedElements.push(e.target.parentNode.getAttribute("data-name"));

    for (let element of clickedElements) {
      console.log(element);
    }
  } else if (e.target.localName === "img") {
    clickedElements.push(e.target.parentNode.getAttribute("data-name"));
  }
}
