// Elementos
const giftScreen = document.getElementById('giftScreen');
const loveScreen = document.getElementById('loveScreen');
const happyScreen = document.getElementById('happyScreen');
const sadScreen = document.getElementById('sadScreen');
const giftBox = document.getElementById('giftBox');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const starsContainer = document.getElementById('starsContainer');

// Inicializa estrelas
createStars();

// Clica no presente
giftBox.addEventListener('click', () => {
    giftScreen.classList.add('hidden');
    loveScreen.style.display = 'flex';
    
    // Cria corações flutuantes
    createFloatingHearts();
});

// Botão SIM
btnYes.addEventListener('click', () => {
    loveScreen.style.display = 'none';
    happyScreen.style.display = 'flex';
    
    // Cria flores dançando
    createDancingFlowers();
});

// Botão NÃO
btnNo.addEventListener('click', () => {
    loveScreen.style.display = 'none';
    sadScreen.style.display = 'flex';
    
    // Cria chuva
    createRain();
});

// Criar estrelas piscando
function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.innerHTML = ['⭐', '✨', '⭐', '✨'][Math.floor(Math.random() * 4)];
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Função para criar corações flutuantes
function createFloatingHearts() {
    const hearts = ['💖', '💕', '💗', '💝', '❤️', '💓'];
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
            heart.style.animationDelay = Math.random() * 1 + 's';
            loveScreen.appendChild(heart);

            setTimeout(() => heart.remove(), 9000);
        }, i * 150);
    }
}

// Função para criar flores dançando
function
