const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Uma linguagem de programação para criar páginas web estáticas",
            "Uma linguagem de marcação para estruturar páginas web",
            "Uma linguagem de programação para tornar páginas web interativas",
        ],
        correta: 2
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o operador de comparação estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'querySelector'?",
        respostas: [
            "Selecionar múltiplos elementos do DOM",
            "Selecionar um único elemento do DOM",
            "Alterar o conteúdo de um elemento do DOM",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de dado que armazena valores",
            "Um trecho de código que pode ser chamado e reutilizado",
            "Uma declaração de variável",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "add()",
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '&&' faz em JavaScript?",
        respostas: [
            "Verifica se dois valores são iguais",
            "Realiza uma operação de adição",
            "Realiza uma operação de conjunção lógica",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "remove()",
            "pop()",
            "delete()",
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'addEventListener' faz em JavaScript?",
        respostas: [
            "Adiciona um elemento ao DOM",
            "Adiciona um ouvinte de evento a um elemento do DOM",
            "Remove um elemento do DOM",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma declaração 'if' em JavaScript?",
        respostas: [
            "Uma declaração que define uma função",
            "Uma declaração que define uma variável",
            "Uma declaração condicional que executa código baseado em uma condição",
        ],
        correta: 2
    },
];

// Puxa a div que tem o id "quiz"
const quiz = document.querySelector('#quiz')
// Puxa o template do HTML
const template = document.querySelector('template')

const corretas = new Set()

const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
// Coloca as perguntas
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    // Coloca as opções de respostas
    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta //boolean

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    // Remove o "Resposta A"
    quizItem.querySelector('dl dt').remove()

    // Coloca a pergunta na tela
    quiz.appendChild(quizItem)
}