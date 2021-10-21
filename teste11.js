let numerosListaA = [1, 2, 3, 4]
let numerosListaB = [1, 2, 5, 8]

const intersecao = numerosListaA.filter(i => numerosListaB.includes(i))
console.log(intersecao);
