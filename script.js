let cardsBack = document.querySelectorAll(".card");

cardsBack.forEach(card =>{
  card.addEventListener("click", flipped);
})


function flipped(e) {
  if (e.target.classList.contains("front")) {
    console.log("hey");

    e.target.classList.remove("front");
    e.target.classList.add("back");
  }
}
