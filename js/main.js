const colors = ["green", "red", "purple", "pink", "blue", "gold", "orange", "yellow", "brown"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color")
btn.addEventListener('click', () => {
const randomNumber = getRandomNumber();
document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber]
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
