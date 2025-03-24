// const canvas = document.getElementById("particle-canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const particlesArray = [];

// class Particle {
//     constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 3 + 1;
//         this.speedX = Math.random() * 2 - 1;
//         this.speedY = Math.random() * 2 - 1;
//     }

//     update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
//     }

//     draw() {
//         ctx.fillStyle = "#FFD700";  // Yellow Particles
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//     }
// }

// function initParticles() {
//     for (let i = 0; i < 100; i++) {
//         particlesArray.push(new Particle());
//     }
// }

// function animateParticles() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let particle of particlesArray) {
//         particle.update();
//         particle.draw();
//     }
//     requestAnimationFrame(animateParticles);
// }

// initParticles();
// animateParticles();

// window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });




const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2; // Bigger dots
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = this.getRandomColor();
    }

    getRandomColor() {
        const colors = ["#FFC007", "#FFFFFF", "#000000"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function drawConnections() {
    for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {  // Maximum distance for connection
                ctx.strokeStyle = "#ffffff22"; // Semi-transparent white lines
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
    }
}

function initParticles() {
    for (let i = 0; i < 50; i++) {  // Adjust number of dots
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let particle of particlesArray) {
        particle.update();
        particle.draw();
    }

    drawConnections();
    requestAnimationFrame(animateParticles);
}

// Initialize and Animate
initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});