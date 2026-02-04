
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const copyDiv = document.querySelector(".copycode");

/* Generate random hex color */
const generateHexColor = () => {
    const chars = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
};

/* Apply gradient and update UI */
const updateGradient = () => {
    const color1 = generateHexColor();
    const color2 = generateHexColor();

    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

    // Update UI
    document.body.style.backgroundImage = gradient;
    btn1.textContent = color1;
    btn2.textContent = color2;
    btn1.style.backgroundColor = color1;
    btn2.style.backgroundColor = color2;
    copyDiv.textContent = `background-image: ${gradient};`;

    // Save
    localStorage.setItem("gradient", gradient);
};

/* Button clicks */
btn1.addEventListener("click", updateGradient);
btn2.addEventListener("click", updateGradient);

/* Copy to clipboard */
copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.textContent);

    const oldText = copyDiv.textContent;
    copyDiv.textContent = "✔ Copied!";
    setTimeout(() => copyDiv.textContent = oldText, 1200);
});

/* Load saved gradient */
const savedGradient = localStorage.getItem("gradient");
if (savedGradient) {
    document.body.style.backgroundImage = savedGradient;
    copyDiv.textContent = `background-image: ${savedGradient};`;

    const colors = savedGradient.match(/#([0-9a-f]{6})/gi);
    if (colors) {
        btn1.textContent = colors[0];
        btn2.textContent = colors[1];
        btn1.style.backgroundColor = colors[0];
        btn2.style.backgroundColor = colors[1];
    }
}



