const calcular = require('./CalculaNumeros');

const numberRandom = ( ) => Math.floor(Math.random() * 100 + 1);

calcular.calcularValores( numberRandom(), numberRandom(), numberRandom())
.then(result => console.log(result))
.catch(err => console.log(err.message));
