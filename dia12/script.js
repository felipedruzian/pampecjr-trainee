var fundo = document.getElementById("fundo");
var cores = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "black", "white", "gray", "brown", "cyan", "magenta", "lime", "maroon", "navy", "olive", "silver", "teal", "violet"];

function mudarFundo() {
    fundo.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
}