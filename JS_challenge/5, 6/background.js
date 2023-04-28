const images = ["Abstract 1.jpg", "Abstract 2.jpg", "Abstract 3.jpg", "Abstract 4.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);