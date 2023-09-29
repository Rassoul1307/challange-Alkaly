const tips = document.querySelectorAll('.Tip');
const tipAmountResult = document.getElementById('tipAmountPerson')
const totalParPerson = document.getElementById('totalParPerson')



        // Fonction pour gérer le clic
        function tipSelectionner(element) {
            tips.forEach(function(tip) {
                tip.classList.remove('selected');
            });

            // Ajoute de la classe "selected" à la div cliquée
            element.classList.add('selected');
        }

        // Ajouter un gestionnaire de clic à chaque div
        tips.forEach(function(tip) {
            tip.addEventListener('click', function() {
                const inputMontant = document.getElementById('montant').value;
                const montant = parseInt(inputMontant)
                tipSelectionner(this);
                const inputPerson = document.getElementById('person')
                
                inputPerson.addEventListener('input',()=>{
                    const person = document.getElementById('person').value
                    const nbrPerson = parseFloat(person)
                    const tipValue = (parseFloat(tip.textContent));
                    // console.log(tipValue);
                        let tipAmount = (montant*tipValue)/100
                        // console.log(tipAmount);
                        // console.log(nbrPerson);
                        let tipAmountPers = tipAmount/nbrPerson
        
                    //affichage du resultat
        
                    tipAmountResult.textContent = `$${tipAmountPers}`;
                    totalParPerson.textContent = `$${tipAmountPers + montant}`
                })
                

                // console.log(tipAmountPers);
            });
        });


        