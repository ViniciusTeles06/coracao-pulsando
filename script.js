// Elementos
const giftScreen = document.getElementById('giftScreen');
const loveScreen = document.getElementById('loveScreen');
const happyScreen = document.getElementById('happyScreen');
const sadScreen = document.getElementById('sadScreen');
const giftBox = document.getElementById('giftBox');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const loveText = document.getElementById('loveText');

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

// Função para criar corações flutuantes
function createFloatingHearts() {
    const hearts = ['💖', '💕', '💗', '💝', '❤️'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            loveScreen.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 8000);
        }, i * 200);
    }
}

// Função para criar flores dançando
function createDancingFlowers() {
    const flowers = ['🌸', '🌺', '🌹', '🌻', '🌼', '🌷'];
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.left = Math.random() * 100 + '%';
            flower.style.top = Math.random() * 100 + '%';
            flower.style.animationDelay = Math.random() * 2 + 's';
            happyScreen.appendChild(flower);

            setTimeout(() => {
                flower.remove();
            }, 5000);
        }, i * 150);
    }
}

// Função para criar chuva
function createRain() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const drop = document.createElement('div');
            drop.className = 'raindrop';
            drop.innerHTML = '💧';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
            drop.style.animationDelay = Math.random() * 2 + 's';
            sadScreen.appendChild(drop);

            setTimeout(() => {
                drop.remove();
            }, 3000);
        }, i * 50);
    }
}
