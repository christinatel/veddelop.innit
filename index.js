function popup() {
    var rules = document.getElementById("rules");

    if (rules.style.display === "none" || rules.style.display === "") {
        rules.style.display = "block";
    } else {
        rules.style.display = "none";
    }
}
 
function reglerAtten(){
    let rules18 = document.getElementById("reglerAtten");
 
    if (rules18.style.display === "none" || rules18.style.display === "") {
        rules18.style.display = "block";
    } else {
        rules18.style.display = "none";
    }
}

let spillAvsluttet = false;

let Hearts = "Hjerterkort.png";
let Spar = "Sparkort.png";
let Clover = "Kloverkort.png";
let Ruter = "Ruterkort.png";

  const suits = [Spar, Clover, Ruter, Hearts];

  function bevegHest() {
    if(!spillAvsluttet) {
 
 
        const revealedSuit = suits[Math.floor(Math.random() * suits.length)];
   
    document.getElementById("revealedSuit").innerHTML = "<img src='card back red.png' id='cardBack'> </img> <img src='" + revealedSuit + "' id='cardFront'>";
    document.getElementById("revealedSuit").style.display = "block";
    // Legg til en klasse for å starte animasjonen
    document.getElementById("revealCard").classList.add("animate-card");
   
    // Etter en viss forsinkelse, fjern animasjonsklassen for å tilbakestille kortet
    setTimeout(() => {
    document.getElementById("revealCard").classList.remove("animate-card");
   
    }, 500); // Endre tiden etter behov
   
    if(revealedSuit == Hearts){
    moveHeart()
    }
    else if(revealedSuit == Spar){
    moveSpar()
    }
    else if(revealedSuit == Ruter){
    moveRuter()
    }
    else if(revealedSuit == Clover){
    moveClover()
    }
    }
}
 
document.getElementById("revealCard").addEventListener("click", function() {
bevegHest();
});
 
document.addEventListener('keydown', (e) => {
    if (
        e.keyCode == 37 ||
        e.keyCode == 38 ||
        e.keyCode == 39 ||
        e.keyCode == 40      
  ) {
    bevegHest()
  }
   
});


let heart = document.getElementById("hjerterHest");
let spar = document.getElementById("sparHest")
let clover = document.getElementById("kloverHest")
let ruter = document.getElementById("ruterHest")

function moveHeart() {
   
        // Angi avstanden du vil flytte objektet
        const distanceToMove = 7.9999; // endre denne verdien etter behov
        const currentLeft = parseInt(heart.style.left) || 0;
        heart.style.left = (currentLeft + distanceToMove) + "%";
    
}
function moveSpar() {
   
        // Angi avstanden du vil flytte objektet
        const distanceToMove = 7.9999; // endre denne verdien etter behov
        const currentLeft = parseInt(spar.style.left) || 0;
        spar.style.left = (currentLeft + distanceToMove) + "%";
    
}
function moveClover() {
   
        // Angi avstanden du vil flytte objektet
        const distanceToMove = 7.9999; // endre denne verdien etter behov
        const currentLeft = parseInt(clover.style.left) || 0;
        clover.style.left = (currentLeft + distanceToMove) + "%";
    
}
function moveRuter() {
 
        // Angi avstanden du vil flytte objektet
        const distanceToMove = 7.9999; // endre denne verdien etter behov
        const currentLeft = parseInt(ruter.style.left) || 0;
        ruter.style.left = (currentLeft + distanceToMove) + "%";
    
}

/*function HestMaal(){
    let MaalPosisjon = 90;
    let HjerterPosisjon = parseInt(heart.style.left)
    let SparPosisjon = parseInt(spar.style.left)
    let RuterPosisjon = parseInt(ruter.style.left)
    let CloverPosisjon = parseInt(clover.style.left)

    if(HjerterPosisjon >= MaalPosisjon || SparPosisjon >= MaalPosisjon || RuterPosisjon >= MaalPosisjon || CloverPosisjon >= MaalPosisjon){
        let sluttDiv = document.getElementById("sluttSpill");
        let audioElement = document.getElementById("audio"); 
        sluttDiv.style.display ="block";
        audioElement.play();
        spillAvsluttet = true;
       
    }

 }
 setInterval(HestMaal, 100);*/

 function HestStart(){
    let startPosisjon = 5;
    let HjerterPosisjon = parseInt(heart.style.left)
    let SparPosisjon = parseInt(spar.style.left)
    let RuterPosisjon = parseInt(ruter.style.left)
    let CloverPosisjon = parseInt(clover.style.left)
   
 
    if(HjerterPosisjon >= startPosisjon || SparPosisjon >= startPosisjon || RuterPosisjon >= startPosisjon || CloverPosisjon >= startPosisjon){
        let lyd = document.getElementById("lyd");
        lyd.play();  
       
    }
}
setInterval(HestStart, 100);

function HestMaal(){
    let MaalPosisjon = 90;
    let HjerterPosisjon = parseInt(heart.style.left)
    let SparPosisjon = parseInt(spar.style.left)
    let RuterPosisjon = parseInt(ruter.style.left)
    let CloverPosisjon = parseInt(clover.style.left)
    let hjerterDiv = document.getElementById("hjerterDiv");
    let ruterDiv = document.getElementById("ruterDiv");
    let kloverDiv = document.getElementById("kloverDiv");
    let sparDiv = document.getElementById("sparDiv");
    let hjertervinn = document.getElementById("audiohjerter");
        let rutervinn = document.getElementById("audioruter");
        let klovervinn = document.getElementById("audioklover");
        let sparvinn = document.getElementById("audiospar");
    
 
    if(HjerterPosisjon >= MaalPosisjon || SparPosisjon >= MaalPosisjon || RuterPosisjon >= MaalPosisjon || CloverPosisjon >= MaalPosisjon){
        let audioElement = document.getElementById("audio");
        
        
        audioElement.play();
        lyd.pause();
        audioElement.volume = 0.6;
        spillAvsluttet = true;    
       
    }
 
    if(HjerterPosisjon >= MaalPosisjon){
        hjerterDiv.style.display ="block";
        hjertervinn.play();
        hjertervinn.volume = 100;
    }
    else if(SparPosisjon >= MaalPosisjon){
        sparDiv.style.display ="block";
        sparvinn.play();
        sparvinn.volume = 100;
    }
    else if(RuterPosisjon >= MaalPosisjon){
        ruterDiv.style.display ="block";
        rutervinn.play();
        rutervinn.volume = 100;
    }
    else if(CloverPosisjon >= MaalPosisjon){
        kloverDiv.style.display ="block";
        klovervinn.play();
        klovervinn.volume = 100;
 }
}
 setInterval(HestMaal, 100);
