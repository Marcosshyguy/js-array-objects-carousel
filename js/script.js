// DATA
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const sliderContainer = document.querySelector(".main-picture");

const horizontalSliderContainer = document.querySelector(".miniatures-container");

// btn
const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const btnRevert = document.getElementById("revert");
const btnStop = document.getElementById("stop");
console.log(btnRight,btnLeft, btnRevert,btnStop)
// let thisObject
// for( let imagesIndex = 0; imagesIndex < images.length; imagesIndex++){
//     thisObject = images[imagesIndex]
//     console.log(thisObject);
// }  

// forEach
images.forEach((items) => {
    // creazione degli elemeti da disporre nel dom tramite estrapolazione chiavi oggetti con foreach
    let mainThumb = document.createElement("div");
    
    mainThumb.innerHTML = `
    <div class="title-pic">
    <h2>${items.title}</h2>
    <p>${items.text}</p>
    </div>
    <img src="${items.image}" alt="${items.title}">`;

    mainThumb.classList.add("picture");
    mainThumb.classList.add("d-none");
    sliderContainer.append(mainThumb)

    // creazione elmenti slider orizzontale
    let thumbsMiniature = document.createElement("div");
    thumbsMiniature.innerHTML = `<img src="${items.image}">`
    thumbsMiniature.classList.add("miniature");
    horizontalSliderContainer.append(thumbsMiniature); 
})

// ottengo elemnti html creati tramit get by class name
let collectionMainThumb = document.getElementsByClassName("picture");
let collectionThumbsMiniature = document.getElementsByClassName("miniature");

// imposto all'indice dei collector creati con getByClassName la posizione 0 e rimuovo il d-none
let indexCollector = 0
collectionMainThumb[indexCollector].classList.remove("d-none");
collectionThumbsMiniature[indexCollector].classList.add("miniature-selected");


// collectionThumbsMiniature Listenr
// collectionThumbsMiniature[indexCollector].addEventListener("click",function(){
    
// })

// btnRightListener
btnRight.addEventListener("click", slideRigth);


// btnLeftListener
btnLeft.addEventListener("click", slideLeft);
    

// setInterval(() => {
//     if(indexCollector < collectionMainThumb.length - 1){
//         collectionMainThumb[indexCollector].classList.add("d-none");
//         collectionThumbsMiniature[indexCollector].classList.remove("miniature-selected");

//         indexCollector++;
//         collectionMainThumb[indexCollector].classList.remove("d-none");
//         collectionThumbsMiniature[indexCollector].classList.add("miniature-selected");
//     }else if(indexCollector === collectionMainThumb.length - 1){
//         collectionMainThumb[indexCollector].classList.add("d-none");
//         collectionThumbsMiniature[indexCollector].classList.remove("miniature-selected");
//         indexCollector = 0;
//         collectionMainThumb[indexCollector].classList.remove("d-none");
//         collectionThumbsMiniature[indexCollector].classList.add("miniature-selected");
//     }
// }, 1000);

// let flag = true;
// btnStop.addEventListener("click", function(){
//     if(flag){
//         flag = false
//         clearInterval(graffio);
        
//     }
//     else{
        
//         setInterval(() => {
//             if(indexCollector < collectionMainThumb.length - 1){
//                 collectionMainThumb[indexCollector].classList.add("d-none");
//                 collectionThumbsMiniature[indexCollector].classList.remove("miniature-selected");
        
//                 indexCollector++;
//                 collectionMainThumb[indexCollector].classList.remove("d-none");
//                 collectionThumbsMiniature[indexCollector].classList.add("miniature-selected");
//             }else if(indexCollector === collectionMainThumb.length - 1){
//                 collectionMainThumb[indexCollector].classList.add("d-none");
//                 collectionThumbsMiniature[indexCollector].classList.remove("miniature-selected");
//                 indexCollector = 0;
//                 collectionMainThumb[indexCollector].classList.remove("d-none");
//                 collectionThumbsMiniature[indexCollector].classList.add("miniature-selected");
//             }
//         }, 1000);
//         flag = true
//     }
    
// })

// btnRevert.addEventListener("click",)




//////////////////////////////////////////////////////////////////////////////
FUNCTION
function slideRigth() {
    if(indexCollector < collectionMainThumb.length - 1){
        collectionMainThumb[indexCollector].classList.add("d-none");
        collectionThumbsMiniature[indexCollector].classList.remove("miniature-selected");

        indexCollector++;
        collectionMainThumb[indexCollector].classList.remove("d-none");
        collectionThumbsMiniature[indexCollector].classList.add("miniature-selected");
    }else if(indexCollector === collectionMainThumb.length - 1){
        collectionMainThumb[indexCollector].classList.add("d-none");
        collectionThumbsMiniature[indexCollector].classList.remove("miniature-selected");
        indexCollector = 0;
        collectionMainThumb[indexCollector].classList.remove("d-none");
        collectionThumbsMiniature[indexCollector].classList.add("miniature-selected");
    }
}

function slideLeft() {
    if(indexCollector > 0){
        collectionMainThumb[indexCollector].classList.add("d-none");
        collectionThumbsMiniature[indexCollector].classList.remove("miniature-selected");

        indexCollector--;

        collectionMainThumb[indexCollector].classList.remove("d-none");
        collectionThumbsMiniature[indexCollector].classList.add("miniature-selected");
    }else{
            collectionMainThumb[indexCollector].classList.add("d-none");
            collectionThumbsMiniature[indexCollector].classList.remove("miniature-selected");
            indexCollector = collectionMainThumb.length - 1;
            collectionMainThumb[indexCollector].classList.remove("d-none");
            collectionThumbsMiniature[indexCollector].classList.add("miniature-selected");
        }
}