const adviceText = document.querySelector('.advice')
const idAdvice = document.querySelector('.idAdvice')
function getAdvice() {
    // Utilisez fetch pour faire la requête HTTP GET
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            // Parsez la réponse JSON
            return response.json();
        })
        .then(data => {
            // Affichez le conseil dans la page HTML
            adviceText.textContent = data.slip.advice;
            idAdvice.textContent = `#${data.slip.id}`
        })
        .catch(error => {
            // Gérez les erreurs
            console.error('Erreur lors de la récupération des données :', error);
        });
}

const valider = document.querySelector('.nouveau')
valider.addEventListener('click',getAdvice)

getAdvice()