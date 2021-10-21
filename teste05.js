function numerosMultiplos(n1, n2) {
  return n1 % n2 === 0 ? 'são multiplos' : 'não são multiplos'
}

console.log(numerosMultiplos(15, 4));
