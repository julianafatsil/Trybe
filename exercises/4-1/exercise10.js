let custo = 48;
let valorVenda = -1;
let lucro;


if (custo != 0 && valorVenda != 0){
  lucro = 1000 * (valorVenda - custo * 1.2);
} else {
  console.log("ERRO: um dos valores é menor de zero!");
}

console.log(lucro);