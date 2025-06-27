function pares(numeros: number[]): number[] {
    return numeros.filter((numero) => numero % 2 === 0);
}
console.log("Números pares:", pares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));