
function VerificaPalindromo(palavra){
    let arrayLetras = palavra.split('');
    let isPalindrome = true;
    for(let index in arrayLetras) {
        if(arrayLetras[index] === arrayLetras[(arrayLetras.length - 1) -index]){
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

VerificaPalindromo('arara');