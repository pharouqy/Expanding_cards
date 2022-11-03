const panels = document.querySelectorAll(".switch"); // recupérer les division de chaque photo.

panels.forEach((element) => {
  element.addEventListener("click", (e) => {
    // ajouter la class .active sur une seul division cliquer.
    removePanels(); // appel de la fonction qui annule la class .active.
    element.classList.add("active");
  });
});

function removePanels() {
  // fucntion qui enleve par defaut le mode acitve sur toute les divisions.
  panels.forEach((element) => {
    element.classList.remove("active");
  });
}
