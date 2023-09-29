const notes = document.querySelectorAll('.notes')
const valider = document.querySelector('.btn')
const votes = document.querySelector('.votes')
const final = document.querySelector('.final')
final.style.display = 'none'

notes.forEach(element => {
    element.addEventListener('click',()=>{
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }else{
            notes.forEach(otherElement => {
                otherElement.classList.remove('active')
            });
            element.classList.add("active")
        }
        
        valider.addEventListener('click',()=>{
            const etoiles = document.querySelector('.etoiles')
            etoiles.textContent = element.textContent
            votes.style.display = 'none'
            final.style.display = 'block'

        })
        // console.log(element.textContent);
    })
});
