class Funcionario{
    nome: string;
    salario: number;
    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }
}

class Gerente extends Funcionario {
    departamento: string;

    constructor(nome: string, salario: number, departamento: string) {
        super(nome, salario);
        this.departamento = departamento;
    }
}