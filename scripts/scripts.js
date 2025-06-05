"use strict";

console.log("I'm alive");

// Code scroll horizontal
  const container = document.querySelector('.horizontal-scroll');
  container.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  }, { passive: false });

// Effet parallaxe modulable
  const overlayImages = document.querySelectorAll('.paralax');
  const scrollContainer = document.querySelector('.horizontal-scroll');
  const slides = document.querySelectorAll('.slide');

  const speedMap = { // modifier les valeurs ici pour modifier la vitesse des éléments
    'parallax--slow': 0.1,
    'parallax--medium': 0.2,
    'parallax--fast': 0.3,
  };

  scrollContainer.addEventListener('scroll', () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const slideWidth = window.innerWidth;

    overlayImages.forEach((img) => {
      // Recherche dans les classes de l'image pour la vitesse
      const classList = Array.from(img.classList);
      const speedClass = classList.find(cls => cls.startsWith('parallax--'));
      if (!speedClass) return;
      const speed = speedMap[speedClass];

      const parentSlide = img.closest('.slide');
      const slideIndex = Array.from(slides).indexOf(parentSlide);
      const slideOffset = slideWidth * slideIndex;
      const relativeScroll = scrollLeft - slideOffset;

      img.style.transform = `translateX(${relativeScroll * speed}px)`;
    });
  });

/*Code pour les dialogues*/
  //Créer des const à chaque fois qu'on veut rajouter un dialogue, il faut une classe pour le bouton qui cache le texte et pour le nouveau texte
  const dialogue = document.getElementById('dialogue1');
  const dialogue2 = document.getElementById('dialogue2');
  const dialogue3 = document.getElementById('dialogue3');
  const dialogue4 = document.getElementById('dialogue4');
  const dialogue5 = document.getElementById('dialogue5');
  const dialogue6 = document.getElementById('dialogue6');
  const dialogue7 = document.getElementById('dialogue7');
  const dialogue8 = document.getElementById('dialogue8');
  const dialogue9 = document.getElementById('dialogue9');
  const dialogue10 = document.getElementById('dialogue10');
  const dialogue11 = document.getElementById('dialogue11');
  const dialogue12 = document.getElementById('dialogue12');
  const dialogue15 = document.getElementById('dialogue15');
  const dialogue16 = document.getElementById('dialogue16');
  const dialogue17 = document.getElementById('dialogue17');
  const projet = document.getElementById('projet');
  const augmentation = document.getElementById('augmentation');
  const zoom = document.getElementById('zoom');
  const btnContinue2 = document.getElementById('btn--continue2');
  const btnContinue4 = document.getElementById('btn--continue4');
  const btnContinue5 = document.getElementById('btn--continue5');
  const btnContinue6 = document.getElementById('btn--continue6');
  const btnContinue7= document.getElementById('btn--continue7');
  const btnContinue8= document.getElementById('btn--continue8');
  const btnContinue10= document.getElementById('btn--continue10');
  const btnContinue11= document.getElementById('btn--continue11');
  const btnContinue12= document.getElementById('btn--continue12');
  const btnContinue13= document.getElementById('btn--continue13');
  const validate= document.getElementById('validate');

  /*Code pour les boutons */
    const btnYes = document.getElementById('btn--yes');
    const btnNo = document.getElementById('btn--no');

  //Code case 1
    // Fonction pour afficher la bulle
    function showDialogue1() {
      dialogue.classList.remove('hidden');
    }

    // Fonction pour cacher la bulle
    function hideDialogue1() {
      dialogue.classList.add('hidden');
    }

    // afficher la bulle 1s après chargement
    setTimeout(showDialogue1, 1000);

    // Actions des boutons
    btnYes.addEventListener('click', () => {
      window.location.href = 'augmentation.html';
    });

    // Code qui dit que quand on appuye sur le non l'autre dialogue ce joue
    btnNo.addEventListener('click', () => {
      hideDialogue1(); // Cache dialogue 1
      setTimeout(() => {
        dialogue2.classList.remove('hidden'); // Montre dialogue 2
      }, 500);
    });
    // à chaque fois qu'on ajoute un dialogue il faut répéter ce code on modifiant "btnContinue2","dialogue2.classList" et "dialogue3.classList"
    btnContinue2.addEventListener('click', () => {
      dialogue2.classList.add('hidden'); // Cache dialogue 2
      setTimeout(() => {
        dialogue3.classList.remove('hidden'); // Montre dialogue 3
      }, 500);
    });

  // Code case 3
    function showDialogue4() {
      dialogue4.classList.remove('hidden');
    }
    // afficher la bulle 1s après chargement
    setTimeout(showDialogue4, 1000);

    btnContinue4.addEventListener('click', () => {
      dialogue4.classList.add('hidden'); // Cache dialogue 4
      setTimeout(() => {
        dialogue5.classList.remove('hidden'); // Montre dialogue 5
      }, 500);
    });

    btnContinue5.addEventListener('click', () => {
      dialogue5.classList.add('hidden'); // Cache dialogue 5
      setTimeout(() => {
        dialogue6.classList.remove('hidden'); // Montre dialogue 6
      }, 500);
    });
    btnContinue6.addEventListener('click', () => {
      dialogue6.classList.add('hidden'); // Cache dialogue 6
      setTimeout(() => {
        dialogue7.classList.remove('hidden'); // Montre dialogue 7
      }, 500);
    });
    btnContinue7.addEventListener('click', () => {
      dialogue7.classList.add('hidden'); // Cache dialogue 7
      setTimeout(() => {
        dialogue8.classList.remove('hidden'); // Montre dialogue 8
      }, 500);
    });
    btnContinue8.addEventListener('click', () => {
      dialogue8.classList.add('hidden'); // Cache dialogue 8
      setTimeout(() => {
        dialogue9.classList.remove('hidden'); // Montre dialogue 9
      }, 500);
    });

  /*Code case 6*/
    btnContinue10.addEventListener('click', () => {
      dialogue10.classList.add('hidden'); // Cache dialogue 10
      setTimeout(() => {
        dialogue11.classList.remove('hidden'); // Montre dialogue 11
      }, 500);
    });
    btnContinue11.addEventListener('click', () => {
      dialogue11.classList.add('hidden'); // Cache dialogue 11
      setTimeout(() => {
        dialogue12.classList.remove('hidden'); // Montre dialogue 12
      }, 500);
    });
  /*Code cases 10*/
  btnContinue12.addEventListener('click', () => {
      dialogue15.classList.add('hidden'); // Cache dialogue 15
      setTimeout(() => {
        dialogue16.classList.remove('hidden'); // Montre dialogue 16
      }, 500);
    });
  /*Code cases 12 */
  btnContinue13.addEventListener('click', () => {
      dialogue17.classList.add('hidden'); // Cache dialogue 17
      setTimeout(() => {
        projet.classList.remove('hidden'); // Montre projet
      }, 500);
    });
    validate.addEventListener('click', () => {
      projet.classList.add('hidden');
      augmentation.classList.add('hidden'); // Cache projet et chibi
      setTimeout(() => {
        zoom.classList.remove('hidden'); // Montre atélè
      }, 500);
    });
// Le questionnaire:
  const allQuestions = [
    // Pool 1
    {
      question: "En quelle année Jacques Servotte est-il né ?",
      answers: ["1899", "1976", "1948", "1963"],
      correct: 2
    },
    {
      question: "Quel est le châtiment de Sisyphe ?",
      answers: ["Porter la voute céleste", "Se faire manger le foie", "Se faire crucifier", "Pousser sans fin un rocher"],
      correct: 3
    },
    {
      question: "Quelle autre figure mythologique est condamnée à un châtiment éternel ?",
      answers: ["Atlas", "Le minotaure", "Prométhée", "Chronos"],
      correct: 0
    },
    {
      question: "Quelle est la signification d’Atèlé ?",
      answers: ["Il faut s’y mettre, assumer avec courage", "Aucune", "Aller plus loin", "L’effort renforce l’esprit"],
      correct: 0
    },
    {
      question: "Quel est le message de l’œuvre ?",
      answers: ["Se replier sur soi même est une mauvaise chose", "Porter lourd c’est important", "Il n’y a pas de message", "Le dépassement de soi"],
      correct: 3
    },
    {
      question: "Particularité des titres des œuvres de Jacques Servotte ?",
      answers: ["Noms des dieux grecs", "Elles n’ont pas de nom", "Ils sont écrits en wallon", "Noms de femmes aimées"],
      correct: 2
    },
    {
      question: "Pourquoi une version en wallon ?",
      answers: ["Pour préserver l’héritage de la langue", "Hommage familial", "Par demande de fans", "Parce qu’il est bizarre"],
      correct: 0
    },
    {
      question: "Qu’est-ce qui a contribué à l’installation de l’œuvre à Namur ?",
      answers: ["Sa fortune personnelle", "Le bourgmestre", "Demande de l’artiste", "Le prix Namosa"],
      correct: 3
    },
    {
      question: "Que représente la sphère dans l’œuvre ?",
      answers: ["L’intimité personnelle", "La société", "La Terre", "La culpabilité"],
      correct: 1
    },
    {
      question: "Lien entre Atlas, Sisyphe et Atèlé ?",
      answers: ["Ils représentent la persévérance", "Ils sont frères", "Ils ont tué leur femme", "Ils représentent l’assurance"],
      correct: 0
    },
    // Pool 2
    {
      question: "Quel poids fait la statue ?",
      answers: ["200 kilos", "2 milliards de grammes", "2 tonnes", "20 tonnes"],
      correct: 2
    },
    {
      question: "Quelle langue parle couramment l’auteur ?",
      answers: ["L’allemand", "Le wallon", "Le flamand", "Le roumain"],
      correct: 1
    },
    {
      question: "Quel est le rapport entre l'œuvre et Jupiter ?",
      answers: [
        "La sphère est la représentation de la planète Jupiter", "Les conditions de vie extrêmes de Jupiter rappellent le message de persévérance de l’œuvre","L’ambition des deux","Il n’y en a aucun"
      ],
      correct: 3
    },
    {
      question: "Quel élément de l'œuvre est censé représenter la société ?",
      answers: ["Aucun", "Le personnage", "La sphère", "Le socle et la plaque signalétique"],
      correct: 2
    },
    {
      question: "Quel est le nom de l’auteur ?",
      answers: ["Jacques Servotte", "Jack Sevrote", "Jacques Sevotte", "Jacques Sévrot"],
      correct: 0
    },
    {
      question: "Où est située la statue ?",
      answers: ["Place de l‘Ange", "Boulevard du Nord", "Au croisement de la rue des Carmes et de la rue des Croisiers", "Place du Théâtre"],
      correct: 2
    },
    {
      question: "En quelle matière est réalisée la sculpture ?",
      answers: ["En acier inoxydable", "En bronze", "En pierre de calcaire", "En bois"],
      correct: 1
    },
    {
      question: "Quelle est la signification d’“Atèlé” en Wallon ?",
      answers: ["Celui qui s’y met, qui assume", "Celui qui travaille dur", "Le porteur de charge", "Celui qui allie force et courage"],
      correct: 0
    },
    {
      question: "Quelle taille fait approximativement la sculpture ?",
      answers: ["1 mètre", "1,3 mètre", "1,6 mètre", "2 mètres"],
      correct: 1
    },
    {
      question: "Dans quelle posture est représentée la sculpture ?",
      answers: ["Debout, bras levés", "Accroupie arc-boutée sur une charge", "Assise, en méditation", "En course vers l’avant"],
      correct: 1
    },
    // Pool 3
    {
      question: "Selon son créateur, quel est l’objectif principal de la sculpture ?",
      answers: ["Représenter la culture Wallonne", "Illustrer une scène mythologique", "Encourager la participation et la responsabilité citoyenne", "Décorer un espace public"],
      correct: 2
    },
    {
      question: "De quelle mythologie s'est inspiré l’auteur pour son œuvre ?",
      answers: ["La mythologie romaine", "La mythologie nordique", "Aucune", "La mythologie grecque"],
      correct: 3
    },
    {
      question: "Quelle loi belge Atèlé dénonce-t-il ?",
      answers: [
        "La loi sur la mayonnaise et son taux de matière grasse",
        "La loi interdisant de porter un gros rocher en public",
        "Aucune",
        "La loi interdisant de s'asseoir sur certains bancs quand on a mal au dos"
      ],
      correct: 2
    },
    {
      question: "Quelle langue particulière parle l’auteur ?",
      answers: ["Aucune", "L’arabe", "Le wallon", "Le russe"],
      correct: 2
    },
    {
      question: "Quelles sont les 2 inspirations mythologiques pour Atèlé ?",
      answers: ["Sisyphe et Atlas", "Sisyphe et Prométhée", "Le Minotaure et Odin", "Thor et Prométhée"],
      correct: 0
    },
    {
      question: "En quoi Atèlé et Mars sont liés ?",
      answers: ["En rien", "Atèlé contient des pierres venant de Mars", "Atèlé est la représentation du dieu Mars", "La sphère d’Atèlé est la représentation de la planète Mars"],
      correct: 0
    },
    {
      question: "Dans quelle forme s’inscrit la sculpture d’Atèlé ?",
      answers: ["Une sphère", "Un cube", "Une pyramide", "Un cylindre"],
      correct: 1
    },
    {
      question: "Quel est le châtiment d’Atlas ?",
      answers: ["Porter le Globe Terrestre sur ses épaules", "Devenir aveugle", "Soutenir la voute céleste", "Se faire tuer chaque nuit pour revenir à la vie le lendemain"],
      correct: 2
    },
    {
      question: "Quel crime Atlas a-t-il commis pour mériter son châtiment ?",
      answers: ["Il a courtisé une femme convoitée par Zeus", "Il a détruit l’Olympe", "Il a jeté un caillou sur Zeus", "Il s’est rallié aux Titans lors d’une guerre"],
      correct: 3
    },
    {
      question: "Quel est le poids de la statue ?",
      answers: ["300kg", "200 tonnes", "3 tonnes", "2 tonnes"],
      correct: 3
    }
  ];

  // Sélectionne 10 questions consécutives aléatoires
function getRandomQuestions(n, total) {
  const startIndex = Math.floor(Math.random() * (total - n + 1));
  return allQuestions.slice(startIndex, startIndex + n);
}

const questions = getRandomQuestions(10, allQuestions.length);

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question--container");
const answerButtons = document.getElementById("answers");

function showQuestion(index) {
  const question = questions[index];
  document.getElementById("question--text").innerText = question.question;
  answerButtons.innerHTML = "";

  question.answers.forEach((answerText, i) => {
    const button = document.createElement("button");
    button.innerText = answerText;
    button.classList.add("answers");
    button.addEventListener("click", () => handleAnswer(i === question.correct));
    answerButtons.appendChild(button);
  });
}

function handleAnswer(isCorrect) {
  if (isCorrect) {
    const currentImg = document.getElementById(`block--${score}`);
    const nextImg = document.getElementById(`block--${score + 1}`);

    if (currentImg) currentImg.classList.remove("active");
    if (nextImg) nextImg.classList.add("active");

    score++;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      showQuestion(currentQuestionIndex);
    } else {
      showResult(); // Appelle la fonction fin de questionnaire
    }
  } else {
    alert("Mauvaise réponse, recommence !");
  }
}

function showResult() {
  // Affiche le message de fin
  questionContainer.innerHTML = "<p>Bravo ! Tu as réussi le questionnaire !<br> Continue pour voir une petite surprise !</p>";
  answerButtons.innerHTML = "";

  // Cacher le chibi du questionnaire
  const chibi = document.querySelector(".el__chibi--questionnaire");
  if (chibi) chibi.classList.add("hidden");

  // Afficher le chibi de fin
  const chibiFin = document.querySelector(".el__chibi--end");
  if (chibiFin) chibiFin.classList.remove("hidden");
}

// Démarre le questionnaire
showQuestion(currentQuestionIndex);

// Récuperer l'information rentrer dans le imput et l'envoyez dans la page 2

const validateBtn = document.getElementById('validate');
const userAnswerInput = document.getElementById('userAnswer');

validateBtn.addEventListener('click', () => {
  const userAnswer = userAnswerInput.value.trim();
  if (userAnswer) {
    // Stocker la valeur dans localStorage
    localStorage.setItem('project3', userAnswer);
    console.log("Enregistrement :", userAnswer);  // <-- ici, dans la fonction
  } else {
    console.log("Aucune valeur entrée");
  }
});

// Transition vers la page d'augmentation
const zoomImage = document.getElementById('zoomable--image');

zoomImage.addEventListener('click', () => {
  zoomImage.classList.add('fullscreen--zoom');

  setTimeout(() => {
    window.location.href = 'augmentation.html';
  }, 700);
});


