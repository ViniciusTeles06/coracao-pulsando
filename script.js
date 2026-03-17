document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const screens = {
        gift: document.getElementById('giftScreen'),
        love: document.getElementById('loveScreen'),
        happy: document.getElementById('happyScreen'),
        sad: document.getElementById('sadScreen')
    };
    
    const giftBox = document.getElementById('giftBox');
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const starsContainers = document.querySelectorAll('.stars-container');

    // Inicializar estrelas em todas as telas de fundo preto
    starsContainers.forEach(container => createStars(container));

    // Evento clique no presente
    giftBox.addEventListener('click', function() {
        screens.gift.classList.add('hidden');
        screens.love.classList.remove('hidden');
        createFloatingHearts();
    });

    // Evento botão SIM
    btnYes.addEventListener('click', function() {
        screens.love.classList.add('hidden');
        screens.happy.classList.remove('hidden');
        createDancingFlowers();
    });

    // Evento botão NÃO
    btnNo.addEventListener('click', function() {
        screens.love.classList.add('hidden');
        screens.sad.classList.remove('hidden');
        createRain();
    });

    // Função criar estrelas
    function createStars(container) {
        for (let i = 0; i < 80; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.textContent = Math.random() > 0.5 ? '⭐' : '✨';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 4 + 's';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            container.appendChild(star);
        }
    }

    // Corações flutuantes
    function createFloatingHearts() {
        const hearts = ['💖', '💕', '💗', '💝', '❤️', '💓', '💞'];
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.create
