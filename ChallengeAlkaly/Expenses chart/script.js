fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const diagramme = document.querySelector('.chart')
        const montant = document.querySelector('.montant')
        const tabAmount = data.map(object => object.amount)
        const maxAmount = Math.max(...tabAmount)
        // console.log(maxAmount);
        const totalAmount = tabAmount.reduce((acc,valeur) => acc + valeur,0)
        // console.log(montant);
        montant.textContent = `$${totalAmount}`
        data.forEach(element => {
            const barre = document.createElement('div')
            const jours = document.createElement('span')
            jours.textContent = `${element.day}`
            jours.classList.add('bar-label');
            barre.classList.add('bar')
            barre.style.height = `${element.amount * 5}px`
            
            if (element.amount == maxAmount) {
                barre.style.backgroundColor = '#76b5bc';
            }

            const barTooltip = document.createElement('div');
            barTooltip.classList.add('bar-tooltip');
            barTooltip.textContent = `Amount: ${element.amount}`;

            barre.appendChild(jours)
            barre.appendChild(barTooltip)
            diagramme.appendChild(barre)
        });
    })