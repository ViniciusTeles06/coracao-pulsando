document.addEventListener('click', function(e) {
    for(let i = 0; i < 5; i++) {
        setTimeout(() => createHeart(e.clientX, e.clientY), i * 80);
    }
});

function createHeart(x, y) {
    const hearts = ['💕','💖','💗','💓','💞','💝'];
    const heart = document.createElement('span');
    heart.textContent = hearts[Math.floor(Math.random()*hearts.length)];
    heart.style.cssText = `
        position: fixed; left: ${x}px; top: ${y}px;
        font-size: ${25+Math.random()*15}px;
        pointer-events: none; z-index: 1000;
        animation: floatHearts 3s ease-out forwards;
        color: #ff69b4; text-shadow: 0 0 12px #ff69b4;
    `;
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 3000);
}

const style = document.createElement('style');
style.textContent = `@keyframes floatHearts {
    0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
    100% { transform: translateY(-180px) rotate(720deg) scale(0); opacity: 0; }
}`;
document.head.appendChild(style);
