let number1 = 13;
let number2 = 23;
let number3 = 30;
let isNumber1Maior = num1 > num2 && num1 > num3;
let isNumber2Maior = num2 > num1 && num2 > num3;


if (isNumber1Maior) {
    console.log('O maior número é o primeiro, número: ', num1);
} else if (isNumber2Maior) {
    console.log('O maior número é o segundo, número: ', num2);
} else {
    console.log('O maior número é o terceiro, número: ', num3);
}