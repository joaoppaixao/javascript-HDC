// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("Cliclou aqui!");
})

// 2 - removendo evento
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {

    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 4 - propagação
const containerBtn = document.getElementById("btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
});

btnInsideContainer.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    console.log("Evento 2")
});

// 5 - removendo evento padrao
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página para o google!")
});

// 6 - eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}.`)
});

document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}.`)
});

// 7 - eventos de mouse
const mouseEvents = document.getElementById("mouse");

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botão!");
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão!");
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo")
})

// 8 - movimento do mouse
document.addEventListener("mousemove", (e) => {
    // console.log(`No eixo X: ${e.x}`)
    // console.log(`No eixo Y: ${e.y}`)
})