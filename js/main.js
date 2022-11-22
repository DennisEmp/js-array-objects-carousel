// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell’utente sulle frecce, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se l’img attiva è la prima e l’utente clicca la freccia prev, l’img che deve attivarsi sarà l’ultima e viceversa per l’ultima img se l’utente clicca la freccia next.

const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
    }, 
    
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

console.log(images)

for (var i = 0; i < images.length; i++) {
    document.getElementById("box1").src = images.src;
}


imgs();
function imgs () {

    for (let i = 0; i < images.length; i++) {

        let boxImg = 

         `<div class="container" id="output">
            <section class="box" id="box1"> 
                <img src="${images[i].image}" alt="">
            </section>
            <section class="txt" id="txtID"> 
                <div id="title">${images[i].title}</div>
                <div id="text">${images[i].text}</div>
            </section>
            <button type="button" class="btn btn-light btn-right">
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>`
        
        const container=document.querySelector(".container").innerHTML += boxImg

    }
}





// JS PRIMO CAROSEL.

// const imgArr  = [`img/01.webp`, `img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`,];

// const slide = document.getElementById("box1");

// let active = 0;

// for (let i = 0; i < imgArr.length; i++) {
//     slide.innerHTML += `<img src="${imgArr[i]}" id="img-${i}" alt="" class="none">`
// };

// let box = document.querySelector(".box").classList.add("block");
// let imgActive = document.getElementById("img-" + active);
// imgActive.classList.add("block");
// let btnRight = document.querySelector(".btn-right");

// btnRight.addEventListener("click" , function(){

//     active++
//     if (active > ((imgArr.length) - 1)){
//         active = 0}
//         imgActive.classList.remove("block")
//         imgActive = document.getElementById("img-" + active);
//         imgActive.classList.add("block")
// });

// console.log(btnRight)