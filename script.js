// Compteur de dons fictif animé
let total = 0;
const counter = document.getElementById('counter');

function simulateDonation() {
  const increment = Math.floor(Math.random() * 5 + 1);
  total += increment;
  counter.textContent = `${total} €`;
}

// Simule des dons toutes les 3 secondes
setInterval(simulateDonation, 3000);
