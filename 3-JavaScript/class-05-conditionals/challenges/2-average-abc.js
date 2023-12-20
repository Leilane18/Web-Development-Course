function convertABC(average) {
    if (average >= 90 && average <= 100) {
        return "A";
    } else if (average >= 80 && average < 90) {
        return "B";
    } else if (average >= 70 && average < 80) {
        return "C";
    } else if (average >= 60 && average < 70) {
        return "D";
    } else if (average >= 0 && average < 60) {
        return "F";
    } else {
        return "Média fora do intervalo de 0 a 100";
    }
}


const converteAverage = convertABC(40);
console.log(converteAverage);


switch (converteAverage) {
    case "A":
        console.log("Excelente, aprovado com A!");
        break;
    case "B":
        console.log("Muito bem, aprovado com B!");
        break;
    case "C":
        console.log("Aprovado com C!");
        break;
    case "D":
        console.log("Estude mais, reprovado com D!");
        break;   
     case "F":
        console.log("Lhe falta ódio, reprovado com nota máxima!");
        break;
    default:
        console.log("Nota inválida");
        break;
}