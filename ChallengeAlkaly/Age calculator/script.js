//declaration de variables
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const dayOutput = document.querySelector("#DD");
const monthOutput = document.querySelector("#MM");
const yearOutput = document.querySelector("#YY");

const btn = document.querySelector(".sumbit_btn");

const mois30 = [4, 6, 9, 11]; // Mois avec 30 jours
const mois31 = [1, 3, 5, 7, 8, 10, 12];

let aujourdhui = new Date();
let moisActuel = 1 + aujourdhui.getMonth();
let jourActuel = aujourdhui.getDate();
let anneeActuel = aujourdhui.getFullYear();


//fonction de validation
function validate() {
let validation = true;
  //selectionner tous les inputs
  const inputs = document.querySelectorAll("input");
  
  //pour la validation
  inputs.forEach((element) => {
    let parent = element.parentElement;
    //pour remplissage vide des inputs
    if (!element.value) {
      element.style.borderColor = "red";
      parent.querySelector("small").innerText = "remplir ce champ";

      validation = false;
    } else if (monthInput.value == "") {
      monthInput.style.borderColor = "red";
      monthInput.querySelector("small").innerText = "remplir ce champ";

      validation = false;
    } else if (dayInput.value == "") {
      dayInput.style.borderColor = "red";
      dayInput.querySelector("small").innerText = "remplir ce champ";
      validation = false;
    } else {
      //condition pour les années
      if (yearInput.value > anneeActuel) {
        yearInput.style.borderColor = "red";
        yearInput.parentElement.querySelector("small").innerText =
          "Année non valide";
        validation = false;
        console.log(yearInput.value);
      } else {
        validation = true;

        yearInput.style.borderColor = "black";
        yearInput.parentElement.querySelector("small").innerText = "";
      }
      //condition pour les mois
      if (
        monthInput.value > 12 ||
        (monthInput.value > moisActuel && yearInput.value >= anneeActuel)
      ) {
        monthInput.style.borderColor = "red";
        monthInput.parentElement.querySelector("small").innerText =
          "Mois non valide";
        validation = false;
      } else {
        validation = true;
        monthInput.style.borderColor = "black";
        monthInput.parentElement.querySelector("small").innerText = "";
      }
      //condition pour les jours
      if (
        dayInput.value > 31 ||
        (dayInput.value > jourActuel &&
          yearInput.value == anneeActuel &&
          monthInput.value >= moisActuel)
      ) {
        dayInput.style.borderColor = "red";
        dayInput.parentElement.querySelector("small").innerText =
          "Jour non valide";
        validation = false;
      } else {
        dayInput.style.borderColor = "black";
        dayInput.parentElement.querySelector("small").innerText = "";
        validation = true;
      }
    }
  });
  const mois = parseInt(monthInput.value)
  const annee = parseInt(yearInput.value)
  const joursSpecifies = parseInt((dayInput.value)); // Le nombre de jours que vous avez spécifié
        
  const joursDansMois = nombreDeJoursDansMois(mois, annee);
        
  if (joursDansMois < joursSpecifies) {
    validation = false;
    alert("le jours saisie est invalid")
      yearOutput.innerHTML = "--";
      monthOutput.innerHTML = "--";
      dayOutput.innerHTML = "--";
  }
  return validation;
}

function calculAge() {
  if (validate()) {
    let ageEnAnnees = anneeActuel - yearInput.value;
    let ageEnMois = moisActuel - monthInput.value;
    let ageEnJours = jourActuel - dayInput.value;

    if (ageEnJours < 0) {
      ageEnMois--;
      ageEnJours += nombreDeJoursDansMois(moisActuel - 1, anneeActuel);
    }

    if (ageEnMois < 0) {
      ageEnAnnees--;
      ageEnMois += 12;
    }
    // console.log(joursDansMois(mois, annee));

    yearOutput.innerHTML = ageEnAnnees;
    monthOutput.innerHTML = ageEnMois;
    dayOutput.innerHTML = ageEnJours;
  }
}

// function nombreDeJoursDansMois(mois, annee) {
//   const mois31Jours = [1, 3, 5, 7, 8, 10, 12];
//   const mois30Jours = [4, 6, 9, 11];

//   if (mois === 2) {
//     if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
//       return 29; // Février en année bissextile
//     } else {
//       return 28; // Février en année non bissextile
//     }
//   } else if (mois31Jours.includes(mois)) {
//     return 31;
//   } else if (mois30Jours.includes(mois)) {
//     return 30;
//   }
// }


 // Mois avec 31 jours
function nombreDeJoursDansMois(mois, annee) {

  if (mois === 2) {
      // Vérifiez si l'année est bissextile pour déterminer le nombre de jours en février
      if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
          return 29; // Février a 29 jours dans une année bissextile
      } else {
          return 28; // Février a 28 jours dans une année non bissextile
      }
  } else if (mois30.includes(mois)) {
      return 30;
  } else if (mois31.includes(mois)) {
      return 31;
  } else {
      return -1; // Mois invalide
  }
}