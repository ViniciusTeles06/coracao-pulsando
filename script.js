// Corações flutuantes fofos ao tocar/clicar
document.addEventListener('click', function(e) {
    for(let i = 0; i < 3; i++) {
        setTimeout(() => createFloatingHeart(e.clientX, e.clientY), i * 100);
    }
});

function createFloatingHeart(x, y) {
    const hearts = ['💕', '💖', '💗', '💘', '💝'];
    const heart = document.createElement('div');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: ${20 + Math.random() * 20}px;
        pointer-events: none;
        z-index: 1000;
        animation: floatUp 3s ease-out forwards;
        color: #ff69b4;
        text-shadow: 0 0 10px #ff69b4;
    `;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

// Animação dos corações flutuantes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% { 
            transform: translateY(0) scale(1) rotate(0deg); 
            opacity: 1; 
        }
        100% { 
            transform: translateY(-150px) scale(0.5) rotate(360deg); 
            opacity: 0; 
        }
    }
`;
document.head.appendChild(style);

// Auto-click romântico (opcional)
setInterval(() => {
    if(Math.random() < 0.02) { // 2% chance a cada segundo
        const rect = document.body.getBoundingClientRect();
        createFloatingHeart(
            Math.random() * rect.width, 
            Math.random() * rect.height
        );
    }
}, 1000);
