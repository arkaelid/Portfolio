document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  let load = 0;
  const i = setInterval(function () {
    document.querySelector(".number h2").innerHTML = `${load}%`;
    counter++;
    load++;
    if (counter == 71) {
      clearInterval(i);
    }
  }, 28);
});

document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  let load = 0;
  const i = setInterval(function () {
    document.querySelector(".css h2").innerHTML = `${load}%`;
    counter++;
    load++;
    if (counter == 61) {
      clearInterval(i);
    }
  }, 32);
});

document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  let load = 0;
  const i = setInterval(function () {
    document.querySelector(".js h2").innerHTML = `${load}%`;
    counter++;
    load++;
    if (counter == 11) {
      clearInterval(i);
    }
  }, 170);
});
document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  let load = 0;
  const i = setInterval(function () {
    document.querySelector(".sql h2").innerHTML = `${load}%`;
    counter++;
    load++;
    if (counter == 31) {
      clearInterval(i);
    }
  }, 70);
});
document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  let load = 0;
  const i = setInterval(function () {
    document.querySelector(".photoshop h2").innerHTML = `${load}%`;
    counter++;
    load++;
    if (counter == 51) {
      clearInterval(i);
    }
  }, 40);
});
document.addEventListener("DOMContentLoaded", function () {
  let counter = 0;
  let load = 0;
  const i = setInterval(function () {
    document.querySelector(".humour h2").innerHTML = `${load}%`;
    counter++;
    load++;
    if (counter == 101) {
      clearInterval(i);
    }
  }, 20);
});

$(document).ready(function () {
  // Fonction pour gérer le comportement en fonction de la largeur de l'écran
  function adjustBehavior() {
    if ($(window).width() > 1100) {
      $("nav").on("mouseleave", function () {
        $("nav").slideUp("2000", function () {
          $(".vide").fadeIn("slow");
        });
      });

      $(".vide").on("mouseover", function () {
        $(".vide").fadeOut("slow", function () {
          $("nav").slideDown("2000");
        });
      });

      // Vérifier si la navigation est cachée, puis la faire réapparaître si nécessaire
      if ($("nav").is(":hidden")) {
        $("nav").show();
      }
    } else {
      // Désactiver les événements si la largeur de l'écran est inférieure à 1100
      $("nav").off("mouseleave");
      $(".vide").off("mouseover");
    }
  }

  // Appeler la fonction initiale
  adjustBehavior();

  // Ajouter un écouteur d'événements pour le redimensionnement de la fenêtre
  $(window).resize(function () {
    // Appeler la fonction à chaque redimensionnement de la fenêtre
    adjustBehavior();
  });
});
