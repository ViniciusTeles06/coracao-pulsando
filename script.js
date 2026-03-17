function openGift() {
    // Animação da caixinha abrindo
    const giftBox = document.querySelector('.gift-box');
    giftBox.style.animation = 'giftOpen 1s ease-out forwards';
    
    setTimeout(() => {
        // Transição para tela do coração
        showScreen('heartScreen');
        createSparkles(15);
    }, 1000);
}

function goToHappyCat() {
    showScreen('happyCat');
    createHeartsRain(25);
}

function goToSadCat() {
    showScreen('sadCat');
    createTearsRain(15);
}

function showScreen(screenId) {
    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostra a nova tela com delay para transição suave
    setTimeout(() => {
        document.getElementById(screenId).classList.add('active');
    }, 500);
}

function restartGame() {
    showScreen('giftScreen');
}

function createSparkles(count) {
    for(let i = 0; i < count; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('span');
            sparkle.innerHTML = '✨';
            sparkle.style.cssText = `
                position: fixed; left: ${Math.random()*100}vw; top: ${Math.random()*50}vh;
                font-size: ${20+Math.random()*15}px; pointer-events: none; z-index: 1000;
                animation: sparkleFade 2s ease-out forwards;
                color: #ffd700; text-shadow: 0 0 10px #ffd700;
            `;
            document.body.appendChild(sparkle);
            setTimeout(()=>sparkle.remove(), 2000);
        }, i * 80);
    }
}

function createHeartsRain(count) {
    const hearts = ['💕','💖','💗','💓','💞','💝'];
    for(let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('span');
            heart.textContent = hearts[Math.floor(Math.random()*6)];
            heart.style.cssText = `
                position: fixed; left: ${Math.random()*100}vw; top: -5vh;
                font-size: ${25+Math.random()*20}px; pointer-events: none; z-index: 1000;
                animation: heartsFall 4s linear forwards; color: #ff69b4;
                text-shadow: 0 0 15px
