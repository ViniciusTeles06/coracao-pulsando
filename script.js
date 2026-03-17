// Efeito adicional: corações flutuantes ao clicar
document.addEventListener('click', function(e) {
    createFloatingHeart(e.clientX, e.clientY);
});

// Função para criar corações flutuantes
function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '30px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'float 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    // Remove após animação
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Adiciona estilo da animação flutuante dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Coração pulsa mais forte no hover
const heart = document.querySelector('.heart');
heart.addEventListener('mouseenter', function() {
    this.style.animationDuration = '0.8s';
});
heart.addEventListener('mouseleave', function() {
    this.style.animationDuration = '1.5s';
});