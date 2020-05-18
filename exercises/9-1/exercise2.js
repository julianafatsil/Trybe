const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function smallerName() {
  // escreva aqui o seu código
  let nameBook = '';
  //Usando for
  // for (let index = 0; index < books.length; index++) { 
  //     if(books[index].name.length < nameBook.length || index === 0){ //se tiver no indice zero
  //         nameBook = books[index].name;
  //     }
  // }
  //usando forEach
  books.forEach(elementBook => { //tudo que era books[], passa a ser elementBook
    if (elementBook.name.length < nameBook.length || nameBook.length === 0) { //poderia ser também namebook === '';
      nameBook = elementBook.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

//console.log(smallerName()); //verificar saída

assert.equal(smallerName(), 'Duna');