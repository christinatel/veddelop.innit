function popup(){
    rules = document.getElementById("rules");
    rules.style.display="block";
}

function lukk(){
    rules = document.getElementById("rules");
    rules.style.display="none";
}


   let Hearts = "Hjerterkort.png";
        let Spar = "Sparkort.png";
        let Clover = "Kloverkort.png";
        let Ruter = "Ruterkort.png";

          const suits = [Spar, Clover, Ruter, Hearts];
 
document.getElementById("revealCard").addEventListener("click", function() {
    const revealedSuit = suits[Math.floor(Math.random() * suits.length)];
    
    document.getElementById("revealedSuit").innerHTML = "<img src='"+revealedSuit+"' style='width: 50px'>";
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
});
 
        let heart = document.getElementById("heart");
        let spar = document.getElementById("spar")
        let clover = document.getElementById("clover")
        let ruter = document.getElementById("ruter")

        function moveHeart() {
           
                // Angi avstanden du vil flytte objektet
                const distanceToMove = 10; // endre denne verdien etter behov
                const currentLeft = parseInt(heart.style.left) || 0;
                heart.style.left = (currentLeft + distanceToMove) + "%";
            
        }
        function moveSpar() {
           
                // Angi avstanden du vil flytte objektet
                const distanceToMove = 10; // endre denne verdien etter behov
                const currentLeft = parseInt(spar.style.left) || 0;
                spar.style.left = (currentLeft + distanceToMove) + "%";
            
        }
        function moveClover() {
           
                // Angi avstanden du vil flytte objektet
                const distanceToMove = 10; // endre denne verdien etter behov
                const currentLeft = parseInt(clover.style.left) || 0;
                clover.style.left = (currentLeft + distanceToMove) + "%";
            
        }
        function moveRuter() {
         
                // Angi avstanden du vil flytte objektet
                const distanceToMove = 10; // endre denne verdien etter behov
                const currentLeft = parseInt(ruter.style.left) || 0;
                ruter.style.left = (currentLeft + distanceToMove) + "%";
            
        }
