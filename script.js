function openGift() {
    const giftBox = document.querySelector('.gift-box');
    const heartInside = document.querySelector('.heart-inside');
    
    // Caixinha abre
    giftBox.style.animation = 'giftOpen 0.8s ease-out forwards';
    
    // Coração aparece DENTRO da caixinha
    setTimeout(() => {
        heartInside.classList.add('active');
    }, 400);
    
    // Transição para tela principal
    setTimeout(() => {
        showScreen('heartScreen');
        createSparkles(20);
    }, 1500);
}

function goToHappyCat() {
    showScreen('happyCat');
    createHeartsRain(30);
}

function goToSadCat() {
    showScreen('sadCat');
    createTearsRain(20);
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    setTimeout(() => {
        document.getElementById(screenId).classList.add('active');
    }, 400);
}

function restartGame() {
    showScreen('giftScreen');
    document.querySelector('.gift-box').style.animation = '';
    document.querySelector('.heart-inside').classList.remove('active');
}

function createSparkles(count) {
    for(let i = 0; i < count; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('span');
            sparkle.innerHTML = ['✨','⭐','💫'][Math.floor(Math.random()*3)];
            sparkle.style.cssText = `
                position: fixed; left: ${Math.random()*100}vw; top: ${Math.random()*60}vh;
                font-size: ${25+Math.random()*20}px; z-index: 1001;
                animation: sparkleFade 2.5s ease-out forwards;
                color: #ffd700; text-shadow: 0 0 15px #ffd700;
            `;
            document.body.appendChild(sparkle);
            setTimeout(()=>sparkle.remove(), 2500);
        }, i * 60);
    }
}

function createHeartsRain(count
