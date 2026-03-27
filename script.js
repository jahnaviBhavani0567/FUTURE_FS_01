// Typing effect
const typingText = ["Full Stack Web Developer", "AI Enthusiast", "Tech Innovator"];
let i = 0, j = 0, currentText = '', isDeleting = false;

(function type() {
  if (i < typingText.length) {
    if (!isDeleting && j <= typingText[i].length) {
      currentText = typingText[i].slice(0, j++);
      document.querySelector('.typing').textContent = currentText;
    } else if (isDeleting && j >= 0) {
      currentText = typingText[i].slice(0, j--);
      document.querySelector('.typing').textContent = currentText;
    }

    if (j === typingText[i].length) { isDeleting = true; setTimeout(type, 2000); return; }
    if (isDeleting && j === 0) { isDeleting = false; i++; }
    setTimeout(type, isDeleting ? 50 : 150);
  } else { i = 0; setTimeout(type, 500); }
})();

// Smooth scroll for buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Particle background
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*2 + 1,
    speedX: Math.random()*1 - 0.5,
    speedY: Math.random()*1 - 0.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.fillStyle = '#6e00ff';
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;

    if(p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if(p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

// Resize canvas
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});