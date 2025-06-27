class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;
    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public calcularValorTotal(): number {
        return this.preco * this.quantidade;
    }
}

const produto = new Produto("Notebook", 2500, 3);
console.log("Valor total do produto:", produto.calcularValorTotal());