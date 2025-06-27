type AlunoNota = [string, number];

function formatarAlunoNota(alunoNota: AlunoNota): string {
    const [nome, nota] = alunoNota;
    return `Aluno ${nome} tirou ${nota}.`;
}

const aluno: AlunoNota = ["João", 8];
console.log(formatarAlunoNota(aluno));