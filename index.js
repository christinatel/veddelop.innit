function popup(){
    rules = document.getElementById("rules");
    
    if (rules.style.display==="none") {
        rules.style.display="block"; 
    }
    else{
        rules.style.display="none"; ; 
    }
 
let spillAvsluttet = false;

let Hearts = "Hjerterkort.png";
let Spar = "Sparkort.png";
let Clover = "Kloverkort.png";
let Ruter = "Ruterkort.png";

  const suits = [Spar, Clover, Ruter, Hearts];

document.getElementById("revealCard").addEventListener("click", function() {

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

function HestMaal(){
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
 setInterval(HestMaal, 100);
