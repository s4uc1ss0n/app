// Animation supplémentaire pour le message
const message = document.querySelector('.saucisson-message');
const icon = document.querySelector('.saucisson-icon');

// Effet de couleur changeante
let colors = ['#d63384', '#ff6b6b', '#ee5a24', '#ff9ff3', '#f368e0'];
let currentColor = 0;

function changeColor() {
    message.style.color = colors[currentColor];
    icon.style.color = colors[(currentColor + 1) % colors.length];
    currentColor = (currentColor + 1) % colors.length;
}

setInterval(changeColor, 1000);

// Ajout d'un message dynamique
setTimeout(() => {
    message.textContent = "Le saucisson, c'est la vie !";
}, 3000);

// Effet de vibration au survol
const container = document.querySelector('.container');
container.addEventListener('mouseenter', () => {
    container.style.transform = 'scale(1.05)';
});

container.addEventListener('mouseleave', () => {
    container.style.transform = 'scale(1)';
});
