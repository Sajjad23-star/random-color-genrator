// const mybtn1 = document.getElementById("btn1");
// const mybtn2 = document.getElementById("btn2");
// const copyDiv = document.querySelector(".copycode");

// /* Generate random hex color */
// const generateHexColor = () => {
//     const hexValues = "0123456789abcdef";
//     let color = "#";

//     for (let i = 0; i < 6; i++) {
//         color += hexValues[Math.floor(Math.random() * 16)];
//     }
//     return color;
// };

// /* Apply gradient and update button texts */
// const applyGradient = (color1, color2) => {
//     const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

//     document.body.style.backgroundImage = gradient;
//     copyDiv.textContent = `background-image: ${gradient};`;

//     // Update button texts
//     mybtn1.textContent = color1;
//     mybtn2.textContent = color2;

//     // Save to localStorage
//     localStorage.setItem("gradient", gradient);
// };

// /* Button 1 click */
// mybtn1.addEventListener("click", () => {
//     const color1 = generateHexColor();
//     const color2 = generateHexColor();

//     applyGradient(color1, color2);
// });

// /* Button 2 click */
// mybtn2.addEventListener("click", () => {
//     const color1 = generateHexColor();
//     const color2 = generateHexColor();

//     applyGradient(color1, color2);
// });

// /* Copy gradient code */
// copyDiv.addEventListener("click", () => {
//     navigator.clipboard.writeText(copyDiv.textContent);

//     // Visual feedback
//     const originalText = copyDiv.textContent;
//     copyDiv.textContent = "✔ Copied to clipboard!";
    
//     setTimeout(() => {
//         copyDiv.textContent = originalText;
//     }, 1200);
// });

// /* Load saved gradient on refresh */
// const savedGradient = localStorage.getItem("gradient");
// if (savedGradient) {
//     document.body.style.backgroundImage = savedGradient;

//     // Extract colors from saved gradient
//     const gradientMatch = savedGradient.match(/linear-gradient\(to right,\s*(#[0-9a-fA-F]{6}),\s*(#[0-9a-fA-F]{6})\)/);
//     if (gradientMatch) {
//         mybtn1.textContent = gradientMatch[1];
//         mybtn2.textContent = gradientMatch[2];
//         copyDiv.textContent = `background-image: ${savedGradient};`;
//     }
// }

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



