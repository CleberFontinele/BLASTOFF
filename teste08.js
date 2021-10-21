function numeroPrimo(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i == 0)
      return 'Não é primo';
  }
  return 'É primo';
}

console.log(numeroPrimo(6));
