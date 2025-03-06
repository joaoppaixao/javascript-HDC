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

// 9 - evento de scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200) {
        console.log("Passamos de 200px")
    }
})

// 10 - eventos de focus/blur

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input.")
})

input.addEventListener("blur", (e) => {
    console.log("Saiu do input.")
})

// 11 - evento de carregamento

window.addEventListener("load", () => {
    console.log("A página carregou!")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
})

// 12 - debounce
const debounce = (f, delay) => {
    let timeout 

    return (...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay)
    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms")
}, 400)
);