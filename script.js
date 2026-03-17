function showHappyCat() {
    document.getElementById('mainScreen').style.display = 'none';
    document.getElementById('happyCat').style.display = 'flex';
    createHearts(20);
}

function showSadCat() {
    document.getElementById('mainScreen').style.display = 'none';
    document.getElementById('sadCat').style.display = 'flex';
    createTears(10);
}

function restart() {
    document.getElementById('happyCat').style.display = 'none';
    document.getElementById('sadCat').style.display = 'none';
    document.getElementById('mainScreen').style.display = 'flex';
}

function createHearts(count) {
    for(let i = 0; i < count; i++) {
        setTimeout(() => {
            const hearts = ['💕','💖','💗','💓','💞'];
            const heart = document.createElement('span');
            heart.textContent = hearts[Math.floor(Math.random()*5)];
            heart.style.cssText = `
                position: fixed; left: ${Math.random()*100}vw; top: 100vh;
                font-size: ${20+Math.random()*20}px; pointer-events: none;
                z-index: 1000; animation: heartsRain 3s linear forwards;
                color: #ff69b4; text-shadow: 0 0 10px #ff69b4;
            `;
            document.body.appendChild(heart);
            setTimeout(()=>heart.remove(), 3000);
        }, i * 100);
    }
}

function createTears(count) {
    for(let i = 0; i < count; i++) {
        setTimeout(() => {
            const tear = document.createElement('span');
            tear.textContent = '💧';
            tear.style.cssText = `
                position: fixed; left: ${Math.random()*100}vw; top: -10vh;
                font-size: ${15+Math.random()*10}px; pointer-events: none;
                z-index: 1000; animation: tearsFall 4s linear forwards;
                color: #4a9eff; filter: drop-shadow(0 0 5px #4a9eff);
            `;
            document.body.appendChild(tear);
            setTimeout(()=>tear.remove(), 4000);
        }, i * 150);
    }
}

const style = document.createElement('style');
style.textContent = `
    @keyframes heartsRain {
        to { top: -10vh; transform: rotate(360deg); }
    }
    @keyframes tearsFall {
        to { top: 110vh; transform: rotate(-180deg); }
    }
`;
document.head.appendChild(style);

// Auto-hearts românticos
setInterval(() => {
    if(Math.random() < 0.1) createHearts(3);
}, 3000);
