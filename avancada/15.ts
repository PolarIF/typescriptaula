function printIfString(value: unknown): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else {
        console.log('O valor não é uma string.');
    }
}

printIfString('typescript');
printIfString(123);