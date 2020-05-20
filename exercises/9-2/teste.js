const players = [
    { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
    { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
    { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
    { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' },
];

// Mudar a estrutura dos nossos objetos de pessoas para que possamos usar o nome delas como chave e o email como valor. 
// Geralmente pra fazer isso iríamos gastar loops, inicializar variáveis auxiliares fora dele e por aí vai
// Esperado: {chave[nomedapessoa]: valor[email]}

const newPlayers = players.reduce((accumulator, currentValue, index) => {
    console.log(`Loop: ${index}`);
    console.log(`accumulator: `, accumulator);
    console.log(`currentValue[${index}]: `,currentValue);

    // accumulator é um objeto
    // objeto[nome_da_chave] = valor
    // { 'Adriano Imperador': 'didico@futebol.br'}
    //accumulator[currentValue.fullName] = currentValue.email;

    return accumulator;
}, 3);

console.log(newPlayers['Adriano Imperador']);