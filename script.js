const casa = document.querySelectorAll(".casa");
const final = document.querySelector(".mensagemGanhador")
let vezJogador = true;

const jogadorX = "X";
const jogadorO = "O";

const combiVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5 ,8],
    [0, 4, 8],
    [2, 4, 6],
];

document.addEventListener("click", (event) => {
    if(event.target.matches(".casa")) {
        jogar(event.target.id);
    }
})

function jogar(id) {
    const casa = document.getElementById(id);
    turno = vezJogador ? jogadorX : jogadorO;
    casa.textContent = turno;
    casa.classList.add(turno);
    checarVencedor(turno);
}

function checarEmpate() {
    return [...casa].every((cell) => {
        return cell.classList.contains("X") || cell.classList.contains("O");
    });
}

function checarVencedor(turno) {
    const vencedor = combiVitoria.some((combinacao) => {
        return combinacao.every((index) => {
            return casa[index].classList.contains(turno);
        });
    });

    if (vencedor) {
        encerrarJogo(turno);
    } else if (checarEmpate()) {
        encerrarJogo();
    } else {
        vezJogador = !vezJogador;
    }
}

function encerrarJogo(vencedor = null) {
    if (vencedor) {
        final.innerText = `Vencedor da partida foi ${vencedor}`;
    } else {
        final.innerText = "Empate"
    }
}