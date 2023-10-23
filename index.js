function popup(){
    rules = document.getElementById("rules");
    rules.style.display="block";
}

function lukk(){
    rules = document.getElementById("rules");
    rules.style.display="none";
}


 const suits = ["Spar", "Clover", "Ruter", "Hearts"];

document.getElementById("revealCard").addEventListener("click", function() {
    const revealedSuit = suits[Math.floor(Math.random() * suits.length)];
    document.getElementById("revealedSuit").textContent = revealedSuit;
    document.getElementById("revealedSuit").style.display = "block";
});
