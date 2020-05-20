//problemas.spec.js, criar um arquivo assim

const sum1ToX = (num) => {
    let sum = 0;

    if(typeof (num) == 'strint') throw new Error('Argumento deve ser do tipo INT')
    for (let i = 1; i <= num; i += 1) {
        sum += i;
    }
    return sum;

}

assert.strictEqual(typeof (sum1ToX), 'function')
assert.throws(() => {sum1ToX('toot') }, /^Error: 'Argumento deve ser do tipo INT');
