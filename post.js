const art1 = document.querySelector('.p1')
const info1 = document.querySelector('.info1')

art1.addEventListener('click', activeInfo);

function activeInfo(){
    info1.classList.toggle('inactive')
}