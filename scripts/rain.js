const canvas = document.getElementById("rain");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const katikana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/~`";
const numbers = "0123456789";
const characters = latin + katikana + symbols + numbers;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rain = [];
for (let x =0; x < columns; x++) {
    rain[x] = 1;
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#00ff00";
    context.font = `${fontSize}px monospace`;

    for (let i = 0; i < rain.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        context.fillText(text, i * fontSize, rain[i] * fontSize);

        if (rain[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rain[i] = 0;
        }
        rain[i]++;
    }

    requestAnimationFrame(draw);
}

draw();