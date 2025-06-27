class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

let listaPessoas: Pessoa[] = [];

function adicionarPessoa(nome: string, idade: number): void {
    const novaPessoa = new Pessoa(nome, idade);
    listaPessoas.push(novaPessoa);
}

function listarPessoasMaiordeIdade(): void {
    const pessoasMaiorIdade = listaPessoas.filter(pessoa => pessoa.idade >= 18);
    console.log("Pessoas maiores de idade:");
    pessoasMaiorIdade.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    });
}