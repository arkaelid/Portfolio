// Fonction pour ajouter ou supprimer la classe "active" sur les étapes
function updateSteps(clickedStep) {
  clickedStep.classList.add("active");

  let nextSiblings = Array.from(
    clickedStep.nextElementSibling
      ? clickedStep.nextElementSibling.nextElementSibling
      : null
  );

  nextSiblings.forEach(function (sibling) {
    sibling.classList.remove("active");
  });
}

// Fonction pour mettre à jour la barre de progression et afficher le contenu correspondant
function updateProgressBarAndContent(progressWidth, contentClass) {
  document.getElementById("line-progress").style.width = progressWidth;
  document.querySelector(".section-content.active").classList.remove("active");
  document.querySelector(contentClass).classList.add("active");
}

// Ajouter des écouteurs d'événements aux étapes pour mettre à jour les éléments correspondants
document.querySelectorAll(".step").forEach(function (step) {
  step.addEventListener("click", function () {
    updateSteps(this);
  });
});

document.querySelector(".step01").addEventListener("click", function () {
  updateProgressBarAndContent("6%", ".discovery");
});

document.querySelector(".step02").addEventListener("click", function () {
  updateProgressBarAndContent("28%", ".strategy");
});

document.querySelector(".step03").addEventListener("click", function () {
  updateProgressBarAndContent("50%", ".creative");
});

document.querySelector(".step04").addEventListener("click", function () {
  updateProgressBarAndContent("72%", ".production");
});

document.querySelector(".step05").addEventListener("click", function () {
  updateProgressBarAndContent("100%", ".analysis");
});
