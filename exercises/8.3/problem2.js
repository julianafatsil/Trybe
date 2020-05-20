//Finonacci

const assert = required ('assert');

function myRemove(arr, item) {
    let newArray = [];
    for (let i =0; i < arr.length; i += 1) {
        if (item != arr[i]) {
            newArray.push(arr[i]);
        }
    }
    return newArr;
}
//testes aqui

assert.deepEquals(myRemove([1, 2, 3, 4], 3), [1, 2, 3])

//4.2
 assert.deepEquals(myRemove([1, 2, 3, 4], 3))

 //não fazer o 4.3

 //DDD Data Driven Design
 //BDB bahaviour Driven Design - segurança durante o seu desenvolvimento, técnica de desenvolvimento de software
 //Melhorar o conceito do TDD
 // SMART 