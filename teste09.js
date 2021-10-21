const tabuada = (numero) => {
  for (let i = 0; i <= 10; i++) {
    console.table(`${i} x ${numero} = ${i * numero}`);
  }
}
tabuada(10)