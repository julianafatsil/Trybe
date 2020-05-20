
let nota = 75;

if(nota >= 90 && nota <= 100) {
    console.log('Excelente!!! Seu conceito foi: A');
} else if((nota >= 80) && (nota < 90)) {
    console.log('Muito bom!!!  Seu conceito foi: B');
} else if((nota >= 70) && (nota < 80)) {
    console.log('Bom!! Seu conceito foi: C');
} else if((nota >= 60) && (nota < 70)) {
    console.log('Bom, mas aindo pode melhorar..Seu conceito foi: D');
} else if((nota >= 50) && (nota < 60)) {
    console.log('você precisa melhorar! Seu conceito foi: E');
} else if((nota < 50) && (nota >= 0)) {
    console.log('Mais estudo da próxima vez!! Fique ligado hen! Seu conceito foi F');
} else {
    console.log('Nota inválida');
}