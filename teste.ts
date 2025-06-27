// Definição da interface Aluno
interface Aluno {
    nome: string;
    notas: number[];
}

// Função para calcular a média aritmética
function calcularMedia(notas: number[]): number {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

// Função para avaliar a situação do aluno
function avaliarAluno(media: number): string {
    return media >= 7 ? "Aprovado" : "Reprovado";
}

// Dados dos alunos
const alunos: Aluno[] = [
    { nome: "João Silva", notas: [7, 8.5, 6] },
    { nome: "Maria Oliveira", notas: [5, 4.5, 6] },
    { nome: "Carlos Souza", notas: [9, 8, 10] }
];

// Processamento e exibição dos resultados
for (const aluno of alunos) {
    const media = calcularMedia(aluno.notas);
    const situacao = avaliarAluno(media);
    
    // Extrai o primeiro nome do aluno
    const primeiroNome = aluno.nome.split(' ')[0];
    
    console.log(`Aluno: ${primeiroNome}`);
    console.log(`Notas: [${aluno.notas.join(', ')}]`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
    console.log('---------------------');
}