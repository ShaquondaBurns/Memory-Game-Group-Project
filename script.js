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
// we want the array of cards to be set to random
// animals.sort(() => 0.5 - Math.random());
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

let count = 0;

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
      // if the above statement is true --- then don't display the 2 matching cards that were clicked
      clickedElements[0].style.display = "none";
      clickedElements[1].style.display = "none";
      // reset the array that the cards are being pushed to to zero so you can push 2 new matching cards
      clickedElements = [];
      console.log("GOT EM!");
    } else {
      setTimeout(function() {
        clickedElements[0].classList.remove("flipped");
        clickedElements[1].classList.remove("flipped");
        clickedElements = [];
      }, 1000);
      console.log("Nah, try again!");
    }
  } else if (event.target.className === "front") {
    event.target.parentNode.classList.add("flipped");
    clickedElements.push(event.target.parentNode);
  }
}

// *** QUESTIONS ***

//  the clickedElements array is set up to where it will only accept two cards yes? Thats why you have to set it to empty again on line 89?
// how do i let the same card be clicked only once? if I click on the same card twice it will disappear because it has the same data-name...
