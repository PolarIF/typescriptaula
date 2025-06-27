import * as readline from 'readline';

// Configuração da interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

// Função para obter entrada do usuário
function questionAsync(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

// Função principal
async function main() {
    const alunos: Aluno[] = [];
    const quantidadeAlunos = 3;

    console.log('=== Sistema de Cadastro de Alunos e Notas ===');
    
    for (let i = 0; i < quantidadeAlunos; i++) {
        console.log(`\nCadastro do ${i + 1}º aluno:`);
        
        const nome = await questionAsync('Nome completo do aluno: ');
        
        const notas: number[] = [];
        for (let j = 0; j < 3; j++) {
            const notaStr = await questionAsync(`Nota ${j + 1} (0-10): `);
            const nota = parseFloat(notaStr);
            
            if (isNaN(nota) || nota < 0 || nota > 10) {
                console.log('Nota inválida! Digite um número entre 0 e 10.');
                j--; // Repetir esta iteração
                continue;
            }
            
            notas.push(nota);
        }
        
        alunos.push({ nome, notas });
    }

    // Exibir relatório
    console.log('\n=== Relatório Final ===');
    for (const aluno of alunos) {
        const media = calcularMedia(aluno.notas);
        const situacao = avaliarAluno(media);
        const primeiroNome = aluno.nome.split(' ')[0];
        
        console.log(`\nAluno: ${primeiroNome}`);
        console.log(`Notas: [${aluno.notas.join(', ')}]`);
        console.log(`Média: ${media.toFixed(2)}`);
        console.log(`Situação: ${situacao}`);
    }

    rl.close();
}

// Executar o programa
main().catch(err => console.error(err));