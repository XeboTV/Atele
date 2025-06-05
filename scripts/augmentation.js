"use strict";

// récuperer le projet de la page 1
window.addEventListener('DOMContentLoaded', () => {
  const displayProject = document.getElementById('displayProject');
  const project3 = localStorage.getItem('project3');
  
  if (project3 && displayProject) {
    displayProject.textContent = project3;
  }
  
  console.log("Récupération :", project3);  // Ici à l'intérieur, sinon ça ne fonctionne pas
});

// les consts
  const intro = document.getElementById('intro');
  const project1 = document.getElementById('project1');
  const project2 = document.getElementById('project2');
  const project3 = document.getElementById('project3');
  const project4 = document.getElementById('project4');
  const project5 = document.getElementById('project5');
  const btn = document.getElementById('btnIntro');

// afficher les projects

    btn.addEventListener('click', () => {
    // cacher intro
    intro.classList.add('hidden');

    setTimeout(() => {
        project1.classList.remove('hidden');
        project1.classList.add('fade-in');
    }, 800);

    setTimeout(() => {
        project1.classList.remove('fade-in')
        project1.classList.add('hidden');
        project2.classList.remove('hidden');
        project2.classList.add('fade-in');
    }, 2800);

    setTimeout(() => {
        project2.classList.remove('fade-in');
        project2.classList.add('hidden');
        
        displayProject.classList.remove('hidden');
        displayProject.classList.add('fade-in');
        displayProject.classList.add('txt')
    }, 5800);
    });
    setTimeout(() => {
        displayProject.classList.remove('fade-in')
        displayProject.classList.add('hidden');
        project4.classList.remove('hidden');
        project4.classList.add('fade-in');
    }, 8800);
    setTimeout(() => {
        project4.classList.remove('fade-in')
        project4.classList.add('hidden');
        project5.classList.remove('hidden');
        project5.classList.add('fade-in');
    }, 10800);
    