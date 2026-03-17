// Corações flutuantes ao clicar
document.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        font-size: 30px;
        pointer-events: none;
        z-index: 9999;
        animation: float 2s ease-out forwards;
        color: #ff1744;
        text-shadow: 0 0 10px #ff1744;
    `;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
});

// Animação CSS do float
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-120px) scale(0.3); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Efeito hover no coração
document.querySelector('.heart').addEventListener('mouseenter', function() {
    this.style.animationDuration = '0.6s';
});
document.querySelector('.heart').addEventListener('mouseleave', function() {
    this.style.animationDuration = '1.5s';
});
