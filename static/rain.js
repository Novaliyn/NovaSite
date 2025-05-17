const canvas = document.getElementById("rain");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const roman = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/~`";
const characters = roman + katakana + numbers + symbols;
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const rain = Array(columns).fill(1);

function draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.075)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#0F0";
    context.font = `${fontSize}px monospace`;

    for (let i = 0; i < rain.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        context.fillText(char, i * fontSize, rain[i] * fontSize);

        if (rain[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rain[i] = 0;
        }

        rain[i]++;
    }

    requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const newColumns = Math.floor(canvas.width / fontSize);

    rain.length = 0;
    for (let i = 0; i < newColumns; i++) {
        rain.push(1);
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
});

window.addEventListener("click", () => {
context.clearRect(0, 0, canvas.width, canvas.height);
});
