enum DiaDaSemana {
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO,
    DOMINGO,
}

function mensagemDoDia(dia: DiaDaSemana): string {
    switch (dia) {
        case DiaDaSemana.SEGUNDA:
            return "Começando a semana!";
        case DiaDaSemana.TERCA:
            return "Terça-feira produtiva!";
        case DiaDaSemana.QUARTA:
            return "Metade da semana!";
        case DiaDaSemana.QUINTA:
            return "Quase lá!";
        case DiaDaSemana.SEXTA:
            return "Sextou!";
        case DiaDaSemana.SABADO:
            return "Aproveite o sábado!";
        case DiaDaSemana.DOMINGO:
            return "Domingo de descanso!";
        default:
            return "Dia inválido!";
    }
}

console.log(mensagemDoDia(DiaDaSemana.QUARTA));
