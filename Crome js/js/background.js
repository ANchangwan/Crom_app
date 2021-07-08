const images = [
    "맨유.jpg",
    "제주도.jpg",
    "카카오.jpg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;


document.body.appendChild(bgimage);