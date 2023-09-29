const notifs = document.querySelectorAll('.notif')
const nbrNotif = document.querySelector('.nbrNotif')
const toutLus = document.querySelector('.toutLus')
let notificationsNonLues = notifs.length;

console.log(notificationsNonLues);




notifs.forEach(element => {
    const point = element.querySelector('.point')
    element.addEventListener('click',()=>{
        element.classList.add('notifLu')
        point.style.display = "none"

        notificationsNonLues--
        if (notificationsNonLues<0) {
            nbrNotif.textContent = 0
        }else{

            nbrNotif.textContent = notificationsNonLues; 
        }
    })
    nbrNotif.textContent = notificationsNonLues;

    toutLus.addEventListener('click',()=>{
        nbrNotif.textContent = 0
        element.classList.add('notifLu')
        point.style.display = "none"
    })
    
});
