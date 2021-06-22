const calcular = require('./CalculaNumeros');

const numberRandom = ( ) => Math.floor(Math.random() * 100 + 1);

const calcularValoresAleatorios = async () => {
  try {
  const result = await calcular.calcularValores( numberRandom(), numberRandom(), numberRandom())
  console.log(result)
} catch (error) {
  console.log(err.message)
}
};

calcularValoresAleatorios();