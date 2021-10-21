let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numerosPares() {
  for (let i = 1; i <= numeros.length; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

console.log(numerosPares());
