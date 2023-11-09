//Knapp for å åpne/lukke div med regler
function popup() {
    var rules = document.getElementById("rules");

    if (rules.style.display === "none" || rules.style.display === "") {
        rules.style.display = "block";
    } else {
        rules.style.display = "none";
    }
}
 
//Knapp for å åpne/lukke div med drikkelekregler
function reglerAtten(){
    let rules18 = document.getElementById("reglerAtten");
 
    if (rules18.style.display === "none" || rules18.style.display === "") {
        rules18.style.display = "block";
    } else {
        rules18.style.display = "none";
    }
}

//Knapp for å åpne/lukke div med informasjon om oss
function omOss(){
    let omOss = document.getElementById("omOss");
 
    if (omOss.style.display === "none") {
        omOss.style.display = "block";
    } else {
        omOss.style.display = "none";
    }
}


//Setter spillAvsluttet til false, dette endres senere når en av hestene når målstreken
let spillAvsluttet = false;

//Fyller array suits med de fire sortene. Det er bildet av kortet som er i arrayen.
let Hearts = "Hjerterkort.png";
let Spar = "Sparkort.png";
let Clover = "Kloverkort.png";
let Ruter = "Ruterkort.png";

  let suits = [Spar, Clover, Ruter, Hearts];

  //Denne funksjonen blir kalt når enten kortet klikkes, eller en av pilene eller spacebaren klikkes
  function bevegHest() {
    //Sjekker om spill er avsluttet først, slik at man ikke kan bevege hestene etter at spillet er ferdig
    if(!spillAvsluttet) {
 
 
        let revealedSuit = suits[Math.floor(Math.random() * suits.length)];
    

        document.getElementById("revealedSuit").innerHTML = "<img src='card back red.png' id='cardBack'> </img> <img src='" + revealedSuit + "' id='cardFront'>"; //legger inn bildefila i img-taggen med revealedSuit-variablen.
        document.getElementById("revealedSuit").style.display = "block";
        // Legger til en klasse for å starte animasjonen
        document.getElementById("revealCard").classList.add("animate-card");
    
        // Etter en viss forsinkelse, fjernes animasjonsklassen for å tilbakestille kortet
        setTimeout(() => {
        document.getElementById("revealCard").classList.remove("animate-card");
    
        }, 350); // Forsinkelsen har vi satt til 500ms, samme ti som animasjonen bruker
   
            //Når et kort vises, skal samsvarende hest bevege seg
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

//Den ene måten en hest kan beveges på er ved å klikke på kortstokken "revealcard"
document.getElementById("revealCard").addEventListener("click", function() {
bevegHest();
});

//Den andre måten er å klikke på en av pilene på tastaturet eller spacebaren
document.addEventListener('keydown', (e) => {
    if (
        e.keyCode == 32 || // spcace bar
        e.keyCode == 37 || // Venstre-pil
        e.keyCode == 38 || // Opp-pil
        e.keyCode == 39 || // Høyre-pil
        e.keyCode == 40    // Ned-pil
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
    const distanceToMove = 7.9999; // Det var denne veriden vi fant at ga den mest riktige sluttposisjonen for hesten
    const currentLeft = parseInt(heart.style.left) || 0;
    heart.style.left = (currentLeft + distanceToMove) + "%";
    
}
function moveSpar() {
   
    // Angi avstanden du vil flytte objektet
    const distanceToMove = 7.9999; // Det var denne veriden vi fant at ga den mest riktige sluttposisjonen for hesten
    const currentLeft = parseInt(spar.style.left) || 0;
    spar.style.left = (currentLeft + distanceToMove) + "%";
    
}
function moveClover() {
   
    // Angi avstanden du vil flytte objektet
    const distanceToMove = 7.9999; // Det var denne veriden vi fant at ga den mest riktige sluttposisjonen for hesten
    const currentLeft = parseInt(clover.style.left) || 0;
    clover.style.left = (currentLeft + distanceToMove) + "%";
    
}
function moveRuter() {
 
    // Angi avstanden du vil flytte objektet
    const distanceToMove = 7.9999; // Det var denne veriden vi fant at ga den mest riktige sluttposisjonen for hesten
    const currentLeft = parseInt(ruter.style.left) || 0;
    ruter.style.left = (currentLeft + distanceToMove) + "%";
    
}

//Funksjon som spiller av musikk når den første hesten passerer startstreken
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
setInterval(HestStart, 100); //Sjekker hvert 100. ms 


//Funksjon for å sjekke om en av hestene er i mål, stoppe musikk, vise en vinnerdiv og spille fyrverkerilyd
function HestMaal(){
    let MaalPosisjon = 90; //Målposisjon er 90% av skjermen bredden fra venstre
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
    
    //stopper musikken "lyd", og starter fyrverkeilyden "audioElement".
    if(HjerterPosisjon >= MaalPosisjon || SparPosisjon >= MaalPosisjon || RuterPosisjon >= MaalPosisjon || CloverPosisjon >= MaalPosisjon){
        let audioElement = document.getElementById("audio");
        
        
        audioElement.play();
        lyd.pause();
        audioElement.volume = 0.6; //Vi satte fyrverkerilyden til 60%, slik at dne ikke skulle overdøve stemmen
        spillAvsluttet = true; //Nå som spillAvsluttet=true kan ikke lenger hestene bevege seg, se if-setningen i beveghest()  
       
    }
 
    //Sjekker hvilken av hestene som er over målstreken, slik at riktig div vises
    if(HjerterPosisjon >= MaalPosisjon){
        hjerterDiv.style.display ="block";
        hjertervinn.play();
        hjertervinn.volume = 1;
    }
    else if(SparPosisjon >= MaalPosisjon){
        sparDiv.style.display ="block";
        sparvinn.play();
        sparvinn.volume = 1;
    }
    else if(RuterPosisjon >= MaalPosisjon){
        ruterDiv.style.display ="block";
        rutervinn.play();
        rutervinn.volume = 1;
    }
    else if(CloverPosisjon >= MaalPosisjon){
        kloverDiv.style.display ="block";
        klovervinn.play();
        klovervinn.volume = 1;
 }
}
 setInterval(HestMaal, 100); //Programmet sjekker hestenes posisjon hvert 100. ms 
