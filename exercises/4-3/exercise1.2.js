
function VerificaPalindromo(palavra){
    let arrayLetras = palavra.split('');
    let isPalindrome = true;
    for(let index in arrayLetras) {
        if(arrayLetras[index] === arrayLetras[(arrayLetras.length - 1) - index]){
            isPalindrome = false;
        }
        
        if(index <= (arrayLetras.length / 2) + 1) {
            break;
        }
    }

    return isPalindrome;
}


console.log(VerificaPalindromo('arara'));