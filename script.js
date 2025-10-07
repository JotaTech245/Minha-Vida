document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");
    const musicPlayer = document.getElementById("musicPlayer");

    // Quando clicar no botão, mostra o conteúdo e toca a música local
    startButton.addEventListener("click", () => {
        intro.classList.add("hidden");
        content.classList.remove("hidden");

        musicPlayer.play(); // toca a música local
    });

    // ----- CONTADOR -----
    const startDate = new Date("2020-02-15T00:00:00");

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("timer").textContent =
            `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    // ----- CARROSSEL -----
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-container img");

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(showNextImage, 4000);
});

// ----- CORAÇÕES FLUTUANDO -----
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 5 + 's';
    document.querySelector('.hearts-bg').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}
setInterval(createHeart, 300);

// Efeito de aparecer o texto ao rolar
window.addEventListener('scroll', () => {
    const message = document.querySelector('.message');
    const trigger = window.innerHeight / 1.2;

    if (message.getBoundingClientRect().top < trigger) {
        message.classList.add('visible');
    }
});
