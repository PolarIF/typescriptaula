interface Pessoa {
    nome: string;
    idade: number;
    ativo: boolean;
}

const pessoa: Pessoa = {
    nome: "Maria",
    idade: 30,
    ativo: false,
};
console.log("Pessoa:", pessoa);