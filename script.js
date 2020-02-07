let animals = [
  {
    name: "dog",
    imgSrc: "assets/dalmatian.jpg"
  },

  {
    name: "dog",
    imgSrc: "assets/dalmationdoghouse.jpg"
  },

  { name: "cat", imgSrc: "assets/cat.jpg" },

  {
    name: "cat",
    imgSrc: "assets/litterbox.jpg"
  },
  {
    name: "bird",
    imgSrc: "assets/bird.jpg"
  },
  {
    name: "bird",
    imgSrc: "assets/birdcage.jpg"
  },
  {
    name: "fish",
    imgSrc: "assets/fishpet.jpg"
  },
  {
    name: "fish",
    imgSrc: "assets/fishbowl.jpg"
  },
  {
    name: "lizard",
    imgSrc: "assets/lizard.jpg"
  },
  {
    name: "lizard",
    imgSrc: "assets/terrarium.jpg"
  },
  {
    name: "guinea",
    imgSrc: "assets/guinea.jpg"
  },
  {
    name: "guinea",
    imgSrc: "assets/guineawheel.jpg"
  }
];

let gameboard = document.querySelector("#gameboard");

for (let animal of animals) {
  let container = document.createElement("section");
  container.classList.add("container");
  let card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-name", animal.name);
  let front = document.createElement("div");
  front.classList.add("front");
  let back = document.createElement("div");
  back.style.backgroundImage = `url(${animal.imgSrc})`;
  back.style.backgroundPosition = "center";
  back.style.backgroundSize = "cover";
  back.classList.add("back");
  card.append(front, back);
  container.append(card);
  gameboard.append(container);
}

gameboard.addEventListener("click", flipped);

let clickedElements = [];

function flipped(event) {
  console.log(event);
  if (event.target.className === "front" && clickedElements.length === 1) {
    event.target.parentNode.classList.add("flipped");
    clickedElements.push(event.target.parentNode);
    if (
      clickedElements[0].getAttribute("data-name") ===
      clickedElements[1].getAttribute("data-name")
    ) {
      console.log("SAME");
    } else {
      console.log("Not the same");
    }
  } else if (event.target.className === "front") {
    event.target.parentNode.classList.add("flipped");
    clickedElements.push(event.target.parentNode);
  }
}
