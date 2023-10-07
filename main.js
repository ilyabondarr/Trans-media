
 function changeImg(link){
    let image = document.querySelector('.templates__right-block img');
    image.src = 'gif/marsh/gazel.gif'
}
function restoreImg(link){
    let image = document.querySelector('.templates__right-block img');
    image.src = 'gif/transs/liaz_5256.gif'
}
function changeImg2(link){
    let image = document.querySelector('.templates__right-block img');
    image.src = 'gif/marsh/paz_av.gif'
}
function restoreImg2(link){
    let image = document.querySelector('.templates__right-block img');
    image.src = 'gif/transs/liaz_5256.gif'
}

let currentURL = window.location.href;
let orngLine = document.querySelectorAll('.hero__line')
if(currentURL.includes('tramvai.html')){
    document.querySelector('.hero__img-1').src = 'gif/tram_2.gif'
    orngLine[0].style.width = '100%'
    
} else if(currentURL.includes('trolleibus.html')){
    document.querySelector('.hero__img-2').src = 'gif/troll_2.gif'
    orngLine[1].style.width = '100%'
} else if(currentURL.includes('avtobus.html')){
    document.querySelector('.hero__img-3').src = 'gif/avt_2.gif'
    orngLine[2].style.width = '100%'
} else if(currentURL.includes('marshrut.html')){
    document.querySelector('.hero__img-4').src = 'gif/marsh_2.gif'
    orngLine[3].style.width = '100%'
} else if(currentURL.includes('koop.html')){
    document.querySelector('.hero__img-5').src = 'gif/gaz_2.gif'
    orngLine[4].style.width = '100%'
};

let popup = document.querySelector('.popup')
let popupImg = document.querySelector('.popup__foto');
let overlay = document.querySelector('.overlay');
let img1 = document.querySelector('.last-work__link-1');
let img2 = document.querySelector('.last-work__link-2');
let img3 = document.querySelector('.last-work__link-3');

function openPopup(img){
    popup.style.display = 'block'
    popupImg.src = img
}
function closePopup(){
    popup.style.display = 'none'
}