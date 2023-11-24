
const cerrar = document.querySelector('.close')
const info1 = document.querySelector('.estPubli')
const art1 = document.querySelector('.post')

art1.addEventListener('click', activeInfo);
cerrar.addEventListener('click', cerrarInfo);

function activeInfo(){
    info1.classList.toggle('inactive');
}

function cerrarInfo(){
    info1.classList.add('inactive')
}

/////////////////////////////////////////////////
const cerrar2 = document.querySelector('.close2')
const info2 = document.querySelector('.estInter')
const art2 = document.querySelector('.interactions')

art2.addEventListener('click', activeInfo2);
cerrar2.addEventListener('click', cerrarInfo2);

function activeInfo2(){
    info2.classList.toggle('inactive');
}

function cerrarInfo2(){
    info2.classList.add('inactive')
}

///////////////////////////////////////////////////

const cerrar3 = document.querySelector('.close3')
const info3 = document.querySelector('.estFollow')
const art3 = document.querySelector('.followers')

art3.addEventListener('click', activeInfo3);
cerrar3.addEventListener('click', cerrarInfo3);

function activeInfo3(){
    info3.classList.toggle('inactive');
}

function cerrarInfo3(){
    info3.classList.add('inactive')
}