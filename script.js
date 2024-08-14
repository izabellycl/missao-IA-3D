const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você concorda que racismo é crime?",
        alternativas: [
            {
                texto: "sim,concordo",
                afirmacao: [
                    "racismo pode levar a suicidio, depresão, má convivência com familiares, baixa estima, entre outras consequências que não leva a pessoa para frente e sim a ter pensamentos ruins. 
",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "não, não concordo",
                afirmacao: [
                    "vocẽ não está certo. racismo é crime por ser um desrespeito a vítima.
",
                    "afirmacao 2"
                    ]
            }           
            
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 2",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "Alternativa 2 da pergunta 2",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto:"Alternativa 2 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
