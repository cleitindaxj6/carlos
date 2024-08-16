const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultados = document.querySelector('.caixa-resultados');
const textoResultado = document.querySelector('.texto-resultado'); 

const perguntas = [
    {
        enunciado: "Você encontra uma caixa misteriosa em um sótão antigo. O que você faz?",
        alternativas: [
            { texto: "Abrir a caixa imediatamente", afirmacao: "Ao abrir a caixa, uma nuvem de poeira e uma aura sinistra envolvem o ambiente. Você é imediatamente assombrado por visões perturbadoras e pesadelos." },
            { texto: "Levar a caixa para um especialista", afirmacao: "O especialista descobre que a caixa contém uma mensagem aterrorizante, e logo a casa começa a ser assombrada por entidades malignas." }
        ]
    },
    {
        enunciado: "Ao investigar a mensagem secreta, você descobre um mapa antigo. O que você faz com ele?",
        alternativas: [
            { texto: "Seguir o mapa até o local indicado", afirmacao: "Você chega a uma caverna obscura. Ao explorar, é perseguido por presenças fantasmagóricas e encontra um altar macabro." },
            { texto: "Pesquisar sobre o mapa em livros antigos", afirmacao: "Você descobre que o mapa faz parte de uma lenda de terror. A sua casa é agora assombrada por eventos sobrenaturais relacionados à lenda." }
        ]
    },
    {
        enunciado: "Depois de descobrir a história lendária, você decide...",
        alternativas: [
            { texto: "Explorar a lenda e procurar outros artefatos", afirmacao: "Você encontra um diário que detalha rituais sombrios. Ao seguir as pistas, você liberta um espírito vingativo que começa a assombrar sua vida." },
            { texto: "Compartilhar suas descobertas com um grupo de historiadores", afirmacao: "O grupo revela que a lenda é muito mais sinistra do que imaginado, e você é forçado a enfrentar entidades sobrenaturais que foram despertadas." }
        ]
    },
    {
        enunciado: "Enquanto explora os segredos antigos, você encontra um diário com pistas adicionais. O que você faz?",
        alternativas: [
            { texto: "Seguir as pistas do diário", afirmacao: "As pistas levam você a um esconderijo antigo onde encontra objetos amaldiçoados. A maldição começa a afetar sua mente, levando a visões aterrorizantes." },
            { texto: "Decidir manter o diário guardado", afirmacao: "O diário fica oculto, mas você sente uma presença maligna constante, e eventos estranhos começam a acontecer ao seu redor." }
        ]
    },
    {
        enunciado: "Depois de encontrar as relíquias raras, você pode...",
        alternativas: [
            { texto: "Doar as relíquias a um museu", afirmacao: "Você se torna conhecido como um grande explorador, mas descobre que as relíquias têm um efeito maligno sobre você e seus entes queridos." },
            { texto: "Continuar sua busca por mais mistérios", afirmacao: "Você encontra uma nova pista que leva a uma nova aventura, mas a jornada se torna mais perigosa e você começa a sentir uma presença sinistra sempre ao seu redor." }
        ]
    },
    {
        enunciado: "Sua nova aventura leva você a uma ilha desconhecida. O que você faz?",
        alternativas: [
            { texto: "Explorar a ilha por conta própria", afirmacao: "Você desembarca em uma ilha envolta em uma densa neblina e ruínas antigas. À medida que explora, percebe que está sendo seguido por figuras sombrias e experimenta uma sensação crescente de terror. No final, você descobre um antigo culto que realiza rituais macabros." },
            { texto: "Contratar um guia local", afirmacao: "O guia local revela segredos sombrios sobre a ilha, como cultos antigos e rituais sinistros. Durante a exploração, você se perde e enfrenta horrores inimagináveis nas profundezas da ilha, incluindo alucinações e ataques de criaturas estranhas." }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto; 
        botaoAlternativas.addEventListener("click", function() {
            respostaSelecionada(alternativa); 
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostreResultado() {
    caixaPerguntas.textContent = "Fim da história.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
