const form1 = document.querySelector('.form1')
const form2 = document.querySelector('.form2')
const form3 = document.querySelector('.form3')
const form4 = document.querySelector('.form4')
const btnstep2 = document.getElementById('btnstep2')
const btnstep3 = document.getElementById('btnstep3')
const btnstep4 = document.getElementById('btnstep4')

const btnback1 = document.getElementById('btnback1')
const btnback2 = document.getElementById('btnback2')
const btnback3 = document.getElementById('btnback3')

const titlePlan = document.querySelector('.title-plan')
const pricePlan = document.querySelector('.price-plan')
btnback1.addEventListener('click',()=>{
    form1.style.display = "block"
    form2.style.display = "none"
})
btnback2.addEventListener('click',()=>{
    form2.style.display = "block"
    form3.style.display = "none"
})
btnback3.addEventListener('click',()=>{
    form3.style.display = "block"
    form4.style.display = "none"
})


btnstep2.addEventListener('click',()=>{
    const nameUser = document.getElementById('name').value
    const email = document.getElementById('email').value
    const numb = document.getElementById('phone').value

    if (nameUser == '' || email == '' || numb == '') {
        alert("veuillez remplir toutes les champs")
    }else{
        form1.style.display = "none"
        form2.style.display = "block"

    }
})

btnstep3.addEventListener('click',()=>{
    form2.style.display = "none"
    form3.style.display = "block"
})
btnstep4.addEventListener('click',()=>{
    form3.style.display = "none"
    form4.style.display = "block"
})
// Sélectionnez toutes les divs avec la classe "prix"
const divsPrix = document.querySelectorAll('.plans');

divsPrix.forEach(div => {
    div.addEventListener('click', () => {
      // Réinitialisez le style de toutes les divs
      divsPrix.forEach(otherDiv => {
        otherDiv.style.backgroundColor = ''; // Réinitialisez la couleur de fond
      });
      const switchToggle = document.getElementById('switch-toggle');
      let selectedValue='';
      switchToggle.addEventListener('change', () => {
          if (switchToggle.checked) {
              selectedValue = 'Yearly'
              console.log(selectedValue);
              // Ajoutez ici le code à exécuter lorsque le bouton est activé
          } else {
              selectedValue = 'Monthly'
              console.log(selectedValue);
              // Ajoutez ici le code à exécuter lorsque le bouton est désactivé
          }
          const titre = div.querySelector('#option').textContent;
          titlePlan.textContent= `${titre}(${selectedValue})`
          
      });
      

      
      // Récupérez le texte contenu dans la div (le prix)
      const prixText = div.textContent;
      
      // Utilisez une expression régulière pour extraire le prix numérique (100€ dans cet exemple)
      const prixMatch = prixText.match(/\d+/);
      
      // Vérifiez si un prix numérique a été trouvé
      if (prixMatch) {
          // Stockez le prix dans une variable
          const prix = parseFloat(prixMatch[0]);
          console.log(`Prix cliqué : ${prix}€`);
          pricePlan.textContent= `$${prix}/mo`
        
        // Changez le fond de la div au clic
        div.style.backgroundColor = 'lightblue';
        const total = document.querySelector('.total')
  
        total.textContent = `$${prix + 3}/mo`
      }
    });
  });


const checkboxes = document.querySelectorAll('.checkbox');
const priceElements = document.querySelectorAll('.price');

let selectedPrices = [null, null, null]; // Tableau pour stocker les prix


function extractNumericValue(priceString) {
    console.log(selectedPrices);
    const numericValue = parseFloat(priceString.replace('$', ''));
    return isNaN(numericValue) ? null : numericValue;
}

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            selectedPrices[index] = extractNumericValue(priceElements[index].textContent);
            if (selectedPrices[index] !== null) {
                console.log(`Prix sélectionné pour la case ${index + 1} : $${selectedPrices[index].toFixed(2)}`);
                // Vous pouvez utiliser le tableau selectedPrices comme vous le souhaitez ici.
            }
        } else {
            selectedPrices[index] = null;
            console.log(`Aucun prix sélectionné pour la case ${index + 1}.`);
            // Réinitialisez la valeur correspondante du tableau si la case est décochée.
        }
    });
});


